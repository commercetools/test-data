import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import snakeCase from 'lodash/snakeCase';
import prompts from 'prompts';
import { render as renderTemplate } from 'squirrelly';
import { CodeGenerator } from '../types';
import { packageTemplatesData, modelTemplatesData } from './templates';

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

    // 2. Generate the files
    const templatesData = {
      modelName,
      modelCodename,
      graphqlTypePrefix,
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

    modelTemplatesData.forEach((template) => {
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

    console.log('\nAll set! 🚀');
    console.log(
      'You can check the new files in the following directory:',
      outputPath
    );
  },
};
