import { execSync } from 'node:child_process';
import { constants } from 'node:fs';
import { access, mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { findRoot } from '@manypkg/find-root';
import snakeCase from 'lodash/snakeCase';
import prompts from 'prompts';
import { render as renderTemplate } from 'squirrelly';
import { CodeGenerator } from '../types';
import { modelTemplatesData } from './templates';

type TExecCommandError = Error & {
  status?: number;
  stdout?: Buffer;
  stderr?: Buffer;
};

const servicesToTypePrefixMap = {
  core: 'TCore',
  ctp: 'TCtp',
  mc: 'TMc',
  settings: 'TMcSettings',
} as const;

async function ensureDirectory(filePath: string) {
  const dirPath = dirname(filePath);

  try {
    await access(dirPath, constants.F_OK);
  } catch {
    await mkdir(dirPath, { recursive: true });
  }
}

function modelTemplatesFilter(params: {
  isPresetExampleRequired: boolean;
  isDraftModel: boolean;
}) {
  return (template: { templatePath: string; templateContent: string }) => {
    if (params.isDraftModel && template.templatePath.includes('types')) {
      return false;
    }
    if (
      !params.isPresetExampleRequired &&
      template.templatePath.includes('example')
    ) {
      return false;
    }
    return true;
  };
}

export const newTestModelGenerator: CodeGenerator = {
  generate: async () => {
    const { rootDir } = await findRoot(process.cwd());

    const standaloneDir = join(rootDir, 'standalone');
    const standalonePackageJsonPath = join(standaloneDir, 'package.json');
    const modelsDir = join(standaloneDir, 'src/models');

    // 1. Get input information
    const { modelName } = await prompts({
      type: 'text',
      name: 'modelName',
      message:
        'What is the name of the model? (eg: Order, ProductProjection, etc)',
    });
    if (!modelName) {
      throw new Error('Model name is required');
    }
    const modelCodename = snakeCase(modelName).replaceAll('_', '-');

    const { isDraftRequired } = await prompts({
      type: 'confirm',
      name: 'isDraftRequired',
      message: 'Does this model require a Draft?',
      initial: false,
    });

    const { isPresetExampleRequired } = await prompts({
      type: 'confirm',
      name: 'isPresetExampleRequired',
      message: 'Do you want to generate a preset example?',
      initial: false,
    });

    const { modelOwningService } = await prompts({
      type: 'select',
      name: 'modelOwningService',
      message: 'What is the name of the service that owns this model',
      choices: [
        { title: 'Core (Organization related models)', value: 'core' },
        { title: 'CTP (Project related models)', value: 'ctp' },
        { title: 'MC Gateway', value: 'mc' },
        { title: 'MC Settings', value: 'settings' },
      ],
    });
    const graphqlTypePrefix =
      servicesToTypePrefixMap[
        modelOwningService as keyof typeof servicesToTypePrefixMap
      ];

    const { generationType } = await prompts({
      type: 'select',
      name: 'generationType',
      message: 'What type of model do you want to generate?',
      choices: [
        { title: 'Standalone model', value: 'standalone' },
        { title: 'Child model', value: 'child' },
      ],
    });

    let outputPath = join(modelsDir, modelCodename);
    if (generationType === 'child') {
      const { parentModel } = await prompts({
        type: 'text',
        name: 'parentModel',
        message:
          'What is the name of the parent model folder? (eg: order, product-projection, etc)',
      });
      outputPath = join(modelsDir, parentModel, modelCodename);
    }

    // Get the current version of the packages in this repo
    const standalonePackageJson = JSON.parse(
      await readFile(standalonePackageJsonPath, { encoding: 'utf-8' })
    );

    // 2. Generate the model files
    const templatesData = {
      modelName,
      modelCodename,
      graphqlTypePrefix,
      isDraftRequired,
      isPresetExampleRequired,
      packageVersion: standalonePackageJson.version,
    };

    const filteredModelTemplatesData = modelTemplatesData.filter(
      modelTemplatesFilter({
        isPresetExampleRequired,
        isDraftModel: false,
      })
    );

    for (const template of filteredModelTemplatesData) {
      const filePath = join(outputPath, template.templatePath);
      await ensureDirectory(filePath);
      console.log(`Generating file: ${filePath}`);
      await writeFile(
        filePath,
        renderTemplate(template.templateContent, templatesData),
        { encoding: 'utf-8' }
      );
    }

    if (isDraftRequired) {
      const filteredModelTemplatesData = modelTemplatesData.filter(
        modelTemplatesFilter({
          isPresetExampleRequired,
          isDraftModel: false,
        })
      );
      for (const template of filteredModelTemplatesData) {
        const filePath = join(
          outputPath,
          `${modelCodename}-draft`,
          template.templatePath
        );
        await ensureDirectory(filePath);
        console.log(`Generating file: ${filePath}`);
        await writeFile(
          filePath,
          renderTemplate(template.templateContent, {
            isDraftModel: true,
            isPresetExampleRequired,
            modelName: `${modelName}Draft`,
            modelCodename: `${modelCodename}-draft`,
            graphqlTypePrefix,
          }),
          { encoding: 'utf-8' }
        );
      }
    }

    // 3. Update the standalone package
    if (generationType === 'standalone') {
      console.log();
      console.log(
        `Updating standalone package to add new entrypoint for "${modelCodename}"`
      );
      // Update package.json
      standalonePackageJson.files.push(modelCodename);
      standalonePackageJson.files.sort();
      standalonePackageJson.preconstruct.entrypoints.push(
        `./${modelCodename}.ts`
      );
      standalonePackageJson.preconstruct.entrypoints.sort();
      await writeFile(
        standalonePackageJsonPath,
        JSON.stringify(standalonePackageJson, null, 2),
        { encoding: 'utf-8' }
      );

      console.log(`Creating entrypoint`);
      const modelEntryPointPath = join(
        standaloneDir,
        `src/${modelCodename}.ts`
      );
      await writeFile(
        modelEntryPointPath,
        `export * from './models/${modelCodename}';`,
        { encoding: 'utf-8' }
      );

      // Run Preconstruct to generate the entrypoint proxy folder.
      console.log(`Running "preconstruct fix"`);
      try {
        execSync('pnpm preconstruct fix', {
          cwd: rootDir,
        });
      } catch (err) {
        const error = err as TExecCommandError;
        throw new Error(
          `Failed to run "preconstruct fix": ${error.message} - Exit code: ${error.status} - stdout: ${error.stdout?.toString()} - stderr: ${error.stderr?.toString()} - cwd: ${rootDir}`
        );
      }

      // Run pnpm install to install the new package
      console.log(`Running "pnpm install"`);
      try {
        execSync('pnpm install', {
          cwd: rootDir,
        });
      } catch (err) {
        const error = err as TExecCommandError;
        throw new Error(
          `Failed to run "pnpm install": ${error.message} - Exit code: ${error.status} - stdout: ${error.stdout?.toString()} - stderr: ${error.stderr?.toString()} - cwd: ${rootDir}`
        );
      }
    }

    console.log();
    console.log(
      "\n 🚀 All set! We've generated all files. You can now adjust them to your needs."
    );
    console.log(
      'You can check the new files in the following directory:',
      outputPath
    );
  },
};
