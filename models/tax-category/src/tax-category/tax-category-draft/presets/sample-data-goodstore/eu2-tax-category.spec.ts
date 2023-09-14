import type {
    TTaxCategoryDraft,
    TTaxCategoryDraftGraphql,
  } from '../../../types';
  import EU2TaxCategory from './eu2-tax-category';
  
  describe('with a tax rate preset `eu2 tax category`', () => {
    it('should return a tax category with name `EU2 Tax Category` and 2 tax rates', () => {
      const taxCategory = EU2TaxCategory().build<TTaxCategoryDraft>();
  
      expect(taxCategory).toMatchInlineSnapshot(`
        {
          "description": "",
          "key": "EU2",
          "name": "EU2",
          "rates": [
            {
              "amount": 0.1,
              "country": "DE",
              "includedInPrice": true,
              "name": "Germany",
              "state": undefined,
              "subRates": [],
            },
            {
              "amount": 0.1,
              "country": "GB",
              "includedInPrice": true,
              "name": "United Kingdom,
              "state": undefined,
              "subRates": [],
            },
          ],
        }
      `);
    });
  
    it('should return a tax category with name `EU2 Tax Category` when built for graphql', () => {
      const taxCategoryGraphql = EU2TaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
      expect(taxCategoryGraphql).toMatchInlineSnapshot(`
      {
        "description": "",
        "key": "EU2",
        "name": "EU2",
        "rates": [
          {
            "amount": 0.1,
            "country": "DE",
            "includedInPrice": true,
            "name": "Germany",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.1,
            "country": "GB",
            "includedInPrice": true,
            "name": "United Kingdom",
            "state": undefined,
            "subRates": [],
          },
        ],
      }
      `);
    });
  });
  
