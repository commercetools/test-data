import { TaxCategory, TaxCategoryDraft } from '@commercetools/platform-sdk';
import {
  buildFilename,
  buildFunctionname,
  prettierMeJson,
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
export type TSubRateDraft = {
  amount: number;
  name: string;
};
export type TTaxRateDraft = {
  amount?: number;
  country: string;
  includedInPrice: boolean;
  name: string;
  state?: string;
  subRates?: Array<TSubRateDraft>;
};
export type TTaxCategoryDraft = {
  description?: string;
  key?: string;
  name: string;
  rates?: Array<TTaxRateDraft>;
};

const getTaxCategorySnapshotGraphQL = async (taxCategory: TaxCategory) => {
  const result: TTaxCategoryDraft = {
    name: taxCategory.name,
    description: taxCategory.description,
    key: taxCategory.key,
    rates: taxCategory.rates.map((value): TTaxRateDraft => {
      const { id, ...rest } = value;
      return {
        ...rest,
      };
    }),
  };
  return (
    'JSON.parse(`' +
    (await prettierMeJson(JSON.stringify(sortObj(result)))) +
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
    content += `  });\n\n`;

    content += `  it('should create a ${identifier} tax category type draft when built for Graphql', () => {\n`;
    content += `    const ${identifier}PresetGraphql = ${identifier}().buildGraphql<TTaxCategoryDraftGraphql>();\n`;
    content += `    expect(${identifier}PresetGraphql).toMatchObject(\n`;
    content += await getTaxCategorySnapshotGraphQL(category);
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
