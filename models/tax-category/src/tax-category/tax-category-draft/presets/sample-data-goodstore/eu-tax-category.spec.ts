import type {
    TTaxCategoryDraft,
    TTaxCategoryDraftGraphql,
  } from '../../../types';
  import standardTaxCategory from './eu-tax-category';
  
  describe('with a tax rate preset `eu tax category`', () => {
    it('should return a tax category with name `EU Tax Category` and 2 tax rates', () => {
      const taxCategory = EUTaxCategory().build<TTaxCategoryDraft>();
  
      expect(taxCategory).toMatchInlineSnapshot(`
        {
          "description": "",
          "key": "EU",
          "name": "EU",
          "rates": [
            {
              "amount": 0.1,
              "country": "DE",
              "includedInPrice": false,
              "name": "EU tax",
              "state": undefined,
              "subRates": [],
            },
            {
              "amount": 0.1,
              "country": "GB",
              "includedInPrice": false,
              "name": "UK tax",
              "state": undefined,
              "subRates": [],
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
        "description": "",
        "key": "EU",
        "name": "EU",
        "rates": [
          {
            "amount": 0.1,
            "country": "DE",
            "includedInPrice": false,
            "name": "EU tax",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.1,
            "country": "GB",
            "includedInPrice": false,
            "name": "UK tax",
            "state": undefined,
            "subRates": [],
          },
        ],
      }
      `);
    });
  });
  