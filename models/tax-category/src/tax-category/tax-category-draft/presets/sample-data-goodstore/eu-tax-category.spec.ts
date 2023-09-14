import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import EUTaxCategory from './eu-tax-category';

describe('with a tax rate preset `eu tax category`', () => {
  it('should return a tax category with name `EU Tax Category` and 2 tax rates', () => {
    const taxCategory = EUTaxCategory().build<TTaxCategoryDraft>();

    expect(taxCategory).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "EU",
        "name": "EU",
        "rates": [
          {
            "amount": 0.1,
            "country": "DE",
            "includedInPrice": false,
            "name": "EU tax",
            "state": undefined,
            "subRates": undefined,
          },
          {
            "amount": 0.1,
            "country": "GB",
            "includedInPrice": false,
            "name": "UK tax",
            "state": undefined,
            "subRates": undefined,
          },
        ],
      }
    `);
  });

  it('should return a tax category with name `EU Tax Category` when built for graphql', () => {
    const taxCategoryGraphql =
      EUTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
    expect(taxCategoryGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "EU",
        "name": "EU",
        "rates": [
          {
            "amount": 0.1,
            "country": "DE",
            "includedInPrice": false,
            "name": "EU tax",
            "state": undefined,
            "subRates": undefined,
          },
          {
            "amount": 0.1,
            "country": "GB",
            "includedInPrice": false,
            "name": "UK tax",
            "state": undefined,
            "subRates": undefined,
          },
        ],
      }
    `);
  });
});
