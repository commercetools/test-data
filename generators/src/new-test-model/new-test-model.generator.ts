import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import snakeCase from 'lodash/snakeCase';
import Mustache from 'mustache';
import prompts from 'prompts';
import { CodeGenerator } from '../types';
import { packageTemplatesData, modelTemplatesData } from './templates';

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

    // 2. Generate the files
    const templatesData = { modelName, modelCodename };

    console.log('Generating files...');
    console.log({
      outputPath,
      templatesData,
      packageTemplatesData: packageTemplatesData.map(
        (template) => template.templatePath
      ),
      modelTemplatesData: modelTemplatesData.map(
        (template) => template.templatePath
      ),
    });

    if (generationType === 'standalone') {
      packageTemplatesData.forEach((template) => {
        const filePath = join(outputPath, template.templatePath);
        ensureDirectory(filePath);
        writeFileSync(
          filePath,
          Mustache.render(template.templateContent, templatesData)
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
      writeFileSync(
        filePath,
        Mustache.render(template.templateContent, templatesData)
      );
    });

    console.log('\nAll set! 🚀');
    console.log(
      'You can check the new files in the following directory:',
      outputPath
    );
  },
};
