const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function camelCase(text) {
  const result = text
    .toLowerCase()
    .replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return result.substring(0, 1).toLowerCase() + result.substring(1);
}

function pascalCase(text) {
  const camelCased = camelCase(text);
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
// Function to copy files recursively and replace placeholders
function copyAndReplaceTemplate(from, to, modelName, modelNameCamelCase) {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.statSync(fromPath);

    if (stat.isFile()) {
      let content = fs.readFileSync(fromPath, 'utf8');
      content = content.replace(/<model-name>/g, modelName);
      content = content.replace(/<modelName>/g, modelNameCamelCase);
      content = content.replace(/<ModelName>/g, pascalCase(modelName));
      fs.writeFileSync(toPath, content, 'utf8');
    } else if (stat.isDirectory()) {
      copyAndReplaceTemplate(fromPath, toPath, modelName, modelNameCamelCase);
    }
  });
}

// Function to customize package.json
function customizePackageJson(modelName, modelNameCamelCase, destination) {
  const packageJsonPath = path.join(destination, 'package.json');
  const packageJson = require(packageJsonPath);
  packageJson.name = `@commercetools-test-data/${modelName}`;
  packageJson.version = '0.1.0';
  packageJson.description = `Model for ${modelName}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

// Function to generate the dist folder
function generateDistFolder(modelDir) {
  console.log('Generating dist folder...');
  execSync('pnpm install', { cwd: modelDir, stdio: 'inherit' });
}

// Main function to create a new model
function createModel(modelName) {
  const templateDir = path.join(__dirname, 'template'); // Assuming template is in root_path/template
  const rootDir = path.resolve(__dirname, '..'); // Adjust the root path
  const newModelDir = path.join(rootDir, 'models', modelName);

  if (fs.existsSync(newModelDir)) {
    console.log(`Model folder ${modelName} already exists.`);
    return;
  }

  const modelNameCamelCase = camelCase(modelName);

  copyAndReplaceTemplate(
    templateDir,
    newModelDir,
    modelName,
    modelNameCamelCase
  );
  customizePackageJson(modelName, modelNameCamelCase, newModelDir);
  generateDistFolder(newModelDir);
  console.log(`Model ${modelName} created successfully!`);
}

// Run the script
const modelName = process.argv[2];
if (!modelName) {
  console.error('Please provide a model name.');
  process.exit(1);
}

createModel(modelName);
