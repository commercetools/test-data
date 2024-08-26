import prompts from 'prompts';
import { newTestModelGenerator } from './new-test-model/new-test-model.generator';

async function run() {
  const { generatorName } = await prompts({
    type: 'select',
    name: 'generatorName',
    message: 'What generator do you want to run?',
    choices: [{ title: 'New Test Model', value: 'newTestModel' }],
  });

  console.log(`\nRunning "${generatorName}" generator...\n\n`);
  switch (generatorName) {
    case 'newTestModel': {
      await newTestModelGenerator.generate();
      break;
    }
    default: {
      console.error('No generator found.');
    }
  }
}

run();
