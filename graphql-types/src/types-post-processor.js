const fs = require('fs');
const typesMappings = require('./types-mappings.json');

// These are types autogenerated by the graphql-codegen that we need to prefix
// so they don't collide with the types from the different services
const helperTypes = [
  'Maybe',
  'InputMaybe',
  'Exact',
  'Incremental',
  'MakeOptional',
  'MakeMaybe',
  'MakeEmpty',
  'Scalars',
];

const [, , typesPrefixParam, filePath] = process.argv;
if (!typesPrefixParam) {
  console.log(
    'Please provide a prefix for the generated types: --types-prefix=<prefix>'
  );
  process.exit(1);
}
if (!filePath) {
  console.log('File type is missing');
  process.exit(1);
}

const [, typesPrefix] = typesPrefixParam.split('=');
const serviceName = filePath.split('/').pop().split('.').shift();
const mappings = typesMappings[serviceName] || [];

const fileContent = fs.readFileSync(filePath, 'utf-8');
let modifiedContent = fileContent;

// We first prefix the helper types so they don't collide among the different services types
helperTypes.forEach((type) => {
  modifiedContent = modifiedContent.replace(
    new RegExp(`(?<!\\w)${type}`, 'g'),
    `${typesPrefix}${type}`
  );
});
modifiedContent = modifiedContent.replaceAll(': any', ': unknown');

// We now transform the configured mappings from abstract types to scpecialized ones
mappings.forEach(({ from, to }) => {
  modifiedContent = modifiedContent.replace(
    new RegExp(`<${typesPrefix}${from}>`, 'g'),
    `<${typesPrefix}${to}>`
  );
  modifiedContent = modifiedContent.replace(
    new RegExp(`${typesPrefix}${from};`, 'g'),
    `${typesPrefix}${to};`
  );
});

// modifiedContent = `${modifiedContent} \n---> ${JSON.stringify(typesMappings, null, 2)}`;
fs.writeFileSync(filePath, modifiedContent);