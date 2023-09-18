import { getCategories, getCategoryById } from './ctp/categories';
import { getLimit } from './ctp/config';
import {
  addEntry,
  buildFilename,
  buildFunctionname,
  buildIndexFile,
  formatLocalizedString,
  IndexFile,
  writeFile,
} from './ctp/helpers';
import { getTaxes } from './ctp/tax';

const taxes = async () => {
  const { results } = await getTaxes();
  console.log('Found ' + results.length + ' taxes');

  const header =
    "import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';\n" +
    "import * as TaxCategoryDraft from '../../index';" +
    '\n';

  const categoryMapping: Array<IndexFile> = [];

  for (const taxCategory of results) {
    let content = header;

    const identifier = taxCategory.key || taxCategory.name;
    const functionName = buildFunctionname(identifier);
    content +=
      'const ' +
      functionName +
      '  = () =>\n' +
      '  TaxCategoryDraft.presets\n' +
      '    .empty()\n';
    content = addEntry('name', content, taxCategory.name, '    ');
    content = addEntry('key', content, taxCategory.key, '    ');
    content = addEntry('description', content, taxCategory.description, '    ');

    if (taxCategory.rates) {
      content += '    .rates([\n';
      content += taxCategory.rates
        .map((rate) => {
          return `      TaxRateDraft.presets
        .empty()
        .name('${rate.name}')
        .amount(${rate.amount})
        .includedInPrice(${rate.includedInPrice})
        .country('${rate.country}')
        .subRates([]),`;
        })
        .join('\n');
      content += '\n    ]);';
    }

    content += '\n\nexport default ' + functionName + ';';

    writeFile(
      content,
      'models/tax-category/src/tax-category/tax-category-draft/presets',
      identifier
    );
    categoryMapping.push({
      functionName: functionName,
      fileName: buildFilename(identifier),
    });
  }
  writeFile(
    buildIndexFile(categoryMapping),
    'models/tax-category/src/tax-category/tax-category-draft/presets',
    'index'
  );
};

taxes().then(() => process.exit());
