import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import USTaxCategory from './us-tax-category';

describe('with a tax rate preset `us tax category`', () => {
  it('should return a tax category with name `US Tax Category` and 2 tax rates', () => {
    const taxCategory = USTaxCategory().build<TTaxCategoryDraft>();

    expect(taxCategory).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "us-tax",
        "name": "US Tax Category",
        "rates": [
          {
            "amount": 0.04,
            "country": "US",
            "includedInPrice": false,
            "name": "NY Sales Tax",
            "state": "New York",
            "subRates": [],
          },
          {
            "amount": 0.0475,
            "country": "US",
            "includedInPrice": false,
            "name": "NC Sales Tax",
            "state": "North Carolina",
            "subRates": [],
          },
        ],
      }
    `);
  });

  it('should return a tax category with name `US Tax Category` when built for graphql', () => {
    const taxCategoryGraphql =
      USTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
    expect(taxCategoryGraphql).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "key": "us-tax",
        "name": "US Tax Category",
        "rates": [
          {
            "amount": 0.04,
            "country": "US",
            "includedInPrice": false,
            "name": "NY Sales Tax",
            "state": "New York",
            "subRates": [],
          },
          {
            "amount": 0.0475,
            "country": "US",
            "includedInPrice": false,
            "name": "NC Sales Tax",
            "state": "North Carolina",
            "subRates": [],
          },
        ],
      }
    `);
  });
});
