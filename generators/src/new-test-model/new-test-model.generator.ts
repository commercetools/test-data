import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import snakeCase from 'lodash/snakeCase';
import Mustache from 'mustache';
import prompts from 'prompts';
import { CodeGenerator } from '../types';
import { templates } from './templates';

function ensureDirectory(path: string) {
  if (!existsSync(path)) {
    mkdirSync(join(path, 'presets'), { recursive: true });
  }
}

export const newTestModelGenerator: CodeGenerator = {
  generate: async () => {
    // 1. Get input information
    const { modelName } = await prompts({
      type: 'text',
      name: 'modelName',
      message: 'What is the name of the model? (eg: Order, Product, etc)',
    });
    const modelCodename = snakeCase(modelName).replaceAll('_', '-');
    const { outputPath } = await prompts({
      type: 'text',
      name: 'outputPath',
      message:
        'Where do you want to save the model (relative path)? (default is the current directory)',
      initial: process.cwd(),
    });

    // 2. Generate the files
    const outDirectory = outputPath
      ? join(process.cwd(), outputPath)
      : process.cwd();
    const templatesData = { modelName, modelCodename };

    console.log('Generating files...');
    ensureDirectory(outDirectory);
    writeFileSync(
      join(outDirectory, 'types.ts'),
      Mustache.render(templates.types, templatesData)
    );
    console.log('  Types file generated.');
    writeFileSync(
      join(outDirectory, 'generators.ts'),
      Mustache.render(templates.generators, templatesData)
    );
    console.log('  Generators file generated.');
    writeFileSync(
      join(outDirectory, 'builders.ts'),
      Mustache.render(templates.builders, templatesData)
    );
    console.log('  Builders file generated.');
    writeFileSync(
      join(outDirectory, 'builders.spec.ts'),
      Mustache.render(templates.buildersSpec, templatesData)
    );
    console.log('  Spec file generated.');
    writeFileSync(
      join(outDirectory, 'presets', 'example-preset.ts'),
      Mustache.render(templates.examplePreset, templatesData)
    );
    writeFileSync(
      join(outDirectory, 'presets', 'index.ts'),
      Mustache.render(templates.presetsEntryPoint, templatesData)
    );
    console.log('  Presets file generated.');
    writeFileSync(
      join(outDirectory, 'index.ts'),
      Mustache.render(templates.mainEntryPoint, templatesData)
    );
    console.log('  Main entry point file generated.');

    console.log('\nAll set! 🚀');
    console.log(
      'You can check the new files in the following directory:',
      outDirectory
    );
  },
};
