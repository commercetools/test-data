import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import snakeCase from 'lodash/snakeCase';
import prompts from 'prompts';
import { render as renderTemplate } from 'squirrelly';
import { CodeGenerator } from '../types';
import { packageTemplatesData, modelTemplatesData } from './templates';

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

function ensureDirectory(filePath: string) {
  const dirPath = dirname(filePath);
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
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
    // 1. Get input information
    const { modelName } = await prompts({
      type: 'text',
      name: 'modelName',
      message:
        'What is the name of the model? (eg: Order, ProductProjection, etc)',
    });
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

    let outputPath = join(__dirname, '..', '..', '..', 'models', modelCodename);
    if (generationType === 'child') {
      const { parentModel } = await prompts({
        type: 'text',
        name: 'parentModel',
        message:
          'What is the name of the parent model folder? (eg: order, product-projection, etc)',
      });
      outputPath = join(
        __dirname,
        '..',
        '..',
        '..',
        'models',
        parentModel,
        'src',
        modelCodename
      );
    }

    // Get the current version of the packages in this repo
    const corePackageJson = await import(
      join(__dirname, '..', '..', '..', 'core', 'package.json')
    );

    // 2. Generate the model files
    const templatesData = {
      modelName,
      modelCodename,
      graphqlTypePrefix,
      isDraftRequired,
      isPresetExampleRequired,
      packageVersion: corePackageJson.version,
    };

    console.log(''); // a simple line break
    if (generationType === 'standalone') {
      packageTemplatesData.forEach((template) => {
        const filePath = join(outputPath, template.templatePath);
        ensureDirectory(filePath);
        console.log(`Generating file: ${filePath}`);
        writeFileSync(
          filePath,
          renderTemplate(template.templateContent, templatesData)
        );
      });
    }

    modelTemplatesData
      .filter(
        modelTemplatesFilter({
          isPresetExampleRequired,
          isDraftModel: false,
        })
      )
      .forEach((template) => {
        const filePath = join(
          outputPath,
          generationType === 'standalone' ? 'src' : '',
          template.templatePath
        );
        ensureDirectory(filePath);
        console.log(`Generating file: ${filePath}`);
        writeFileSync(
          filePath,
          renderTemplate(template.templateContent, templatesData)
        );
      });

    if (isDraftRequired) {
      modelTemplatesData
        .filter(
          modelTemplatesFilter({
            isPresetExampleRequired,
            isDraftModel: false,
          })
        )
        .forEach((template) => {
          const filePath = join(
            outputPath,
            'src',
            `${modelCodename}-draft`,
            template.templatePath
          );
          ensureDirectory(filePath);
          console.log(`Generating file: ${filePath}`);
          writeFileSync(
            filePath,
            renderTemplate(template.templateContent, {
              isDraftModel: true,
              isPresetExampleRequired,
              modelName: `${modelName}Draft`,
              modelCodename: `${modelCodename}-draft`,
              graphqlTypePrefix,
            })
          );
        });
    }

    // 3. Update the single package preset
    if (generationType === 'standalone') {
      const presetDirectoryPath = join(
        __dirname,
        '..',
        '..',
        '..',
        'presets',
        'all-packages'
      );
      // Generate the re-export proxy file
      writeFileSync(
        join(presetDirectoryPath, 'src', `${modelCodename}.ts`),
        `export * from '@commercetools-test-data/${modelCodename}';`
      );
      // Update package.json
      const presetPackageJson = (
        await import(join(presetDirectoryPath, 'package.json'))
      ).default;
      presetPackageJson.files.push(modelCodename);
      presetPackageJson.preconstruct.entrypoints.push(`${modelCodename}.ts`);
      presetPackageJson.dependencies[
        `@commercetools-test-data/${modelCodename}`
      ] = 'workspace:*';
      writeFileSync(
        join(presetDirectoryPath, 'package.json'),
        JSON.stringify(presetPackageJson, null, 2)
      );

      // Run preconstruct to generate the proxy package.json file
      const rootDirectoryPath = join(__dirname, '..', '..', '..');
      try {
        execSync('npx preconstruct fix', {
          cwd: rootDirectoryPath,
        });
      } catch (err) {
        const error = err as TExecCommandError;
        throw new Error(
          `Failed to run "preconstruct fix": ${error.message} - Exit code: ${error.status} - stdout: ${error.stdout?.toString()} - stderr: ${error.stderr?.toString()} - cwd: ${rootDirectoryPath}`
        );
      }

      // Run pnpm install to install the new package
      try {
        execSync('pnpm install', {
          cwd: rootDirectoryPath,
        });
      } catch (err) {
        const error = err as TExecCommandError;
        throw new Error(
          `Failed to run "pnpm install": ${error.message} - Exit code: ${error.status} - stdout: ${error.stdout?.toString()} - stderr: ${error.stderr?.toString()} - cwd: ${rootDirectoryPath}`
        );
      }
    }

    console.log(
      "\n 🚀 All set! We've generated all files. You can now adjust them to your needs."
    );
    console.log(
      'You can check the new files in the following directory:',
      outputPath
    );
  },
};
