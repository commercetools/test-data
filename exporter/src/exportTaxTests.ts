import {
  Category,
  CategoryDraft,
  TaxCategory,
  TaxCategoryDraft,
} from '@commercetools/platform-sdk';
import {
  addEntry,
  buildFilename,
  buildFunctionname,
  buildIndexFile,
  filterLocalizedString,
  IndexFile,
  sortObj,
  writeFile,
} from './ctp/helpers';
import { getTaxes } from './ctp/tax';

const getCategorySnapshot = (category: TaxCategory) => {
  //Filter attributes that the builder does not know about
  let {
    id,
    version,
    createdAt,
    lastModifiedAt,
    lastModifiedBy,
    createdBy,
    ...rest
  } = category;

  let result: TaxCategoryDraft = {
    ...rest,
    rates: rest.rates.map((rate) => {
      const { id, ...rateDraft } = rate;
      return rateDraft;
    }),
  };

  if ('lastMessageSequenceNumber' in result) {
    let { lastMessageSequenceNumber, ...changed } = result;
    result = changed;
  }
  if ('versionModifiedAt' in result) {
    let { versionModifiedAt, ...changed } = result;
    result = changed;
  }

  return (
    'JSON.parse(`' +
    JSON.stringify(
      sortObj(result as unknown as { [id: string]: unknown }),
      null,
      2
    ) +
    '`)'
  );
};
const taxes = async () => {
  const { results } = await getTaxes();
  console.log('Found ' + results.length + ' taxes');

  const header =
    'import type {\n' +
    '  TTaxCategoryDraft,\n' +
    '  TTaxCategoryDraftGraphql,\n' +
    "} from '../../../types';";

  for (const category of results) {
    let content = header;

    const identifier = buildFunctionname(category.key || category.name);
    const fileName = buildFilename(category.key || category.name);

    content += `
import ${identifier} from './${fileName}';`;

    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it('should create a ${identifier} taxcategory type draft', () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TTaxCategoryDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(\n`;
    content += getCategorySnapshot(category);
    content += `    );\n`;
    content += `  });\n`;
    content += `});\n`;
    await writeFile(
      content,
      'models/tax-category/src/tax-category/tax-category-draft/presets',
      fileName + '.spec'
    );
  }
};

taxes().then(() => process.exit());
