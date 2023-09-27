import { Category, CategoryDraft } from '@commercetools/platform-sdk';
import { getCategories } from './ctp/categories';
import { getLimit } from './ctp/config';
import {
  buildFilename,
  buildFunctionname,
  filterLocalizedString,
  localizedStringToGraphql,
  sortObj,
  writeFile,
} from './ctp/helpers';

const getCategorySnapshot = (category: Category) => {
  //Filter attributes that the builder does not know about
  let {
    id,
    version,
    createdAt,
    lastModifiedAt,
    lastModifiedBy,
    createdBy,
    ancestors,
    ...rest
  } = category;
  let result: CategoryDraft = rest;
  if ('lastMessageSequenceNumber' in result) {
    let { lastMessageSequenceNumber, ...changed } = result;
    result = changed;
  }
  if ('versionModifiedAt' in result) {
    let { versionModifiedAt, ...changed } = result;
    result = changed;
  }
  const filteredName = filterLocalizedString(category.name);
  if (Object.keys(filteredName).length > 0) {
    result = {
      ...result,
      name: filteredName,
    };
  }
  const filteredSlug = filterLocalizedString(category.slug);
  if (Object.keys(filteredSlug).length > 0) {
    result = {
      ...result,
      slug: filteredSlug,
    };
  }
  if (!result.assets || result.assets.length === 0) {
    result = { ...result, assets: undefined };
  }
  if (rest.parent) {
    result = {
      ...result,
      parent: { key: rest.parent.obj?.key!, typeId: 'category' },
    };
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

const getCategorySnapshotGraphQL = (category: Category) => {
  let result = {
    externalId: category.externalId,
    key: category.key,
    metaDescription: localizedStringToGraphql(category.metaDescription),
    metaKeywords: localizedStringToGraphql(category.metaKeywords),
    metaTitle: localizedStringToGraphql(category.metaTitle),
    description: localizedStringToGraphql(category.description),
    name: localizedStringToGraphql(category.name)!,
    slug: localizedStringToGraphql(category.slug)!,
    orderHint: category.orderHint,
    parent: category.parent
      ? {
          __typename: 'Reference',
          key: category.parent.obj?.key,
          typeId: 'category',
        }
      : undefined,
  };
  return 'JSON.parse(`' + JSON.stringify(sortObj(result), null, 2) + '`)';
};

const categories = async () => {
  const { results } = await getCategories(getLimit(), ['parent']);
  console.log('Found ' + results.length + ' categories');

  const header =
    "import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';";

  for (const category of results) {
    let content = header;

    const identifier = buildFunctionname(
      category.key || category.name['en-GB']
    );
    const fileName = buildFilename(category.key || category.name['en-GB']);

    content += `import ${identifier} from './${fileName}';\n\n`;

    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it('should create a ${identifier} category type draft', () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TCategoryDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(\n`;
    content += getCategorySnapshot(category);
    content += `    );\n`;
    content += `  });\n\n`;

    content += `  it('should create a ${identifier} category type draft when built for Graphql', () => {\n`;
    content += `    const ${identifier}PresetGraphql = ${identifier}().buildGraphql<TCategoryDraftGraphql>();\n`;
    content += `    expect(${identifier}PresetGraphql).toMatchObject(\n`;
    content += getCategorySnapshotGraphQL(category);
    content += `    );\n`;
    content += `  });\n`;

    content += `});\n`;
    await writeFile(
      content,
      'models/category/src/category-draft/presets',
      fileName + '.spec'
    );
  }
};

categories().then(() => process.exit());
