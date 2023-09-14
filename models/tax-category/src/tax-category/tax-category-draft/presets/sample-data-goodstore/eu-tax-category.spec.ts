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
          "key": "EU",
          "name": "EU",
          "rates": [
            {
              "amount": 0.1,
              "country": "DE",
              "includedInPrice": false,
              "name": "EU tax",
            },
            {
              "amount": 0.1,
              "country": "GB",
              "includedInPrice": false,
              "name": "UK tax",
            },
          ],
        }
      `);
    });
  
    it('should return a tax category with name `EU Tax Category` when built for graphql', () => {
      const taxCategoryGraphql = EUTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
      expect(taxCategoryGraphql).toMatchInlineSnapshot(`
      {
        "key": "EU",
        "name": "EU",
        "rates": [
          {
            "amount": 0.1,
            "country": "DE",
            "includedInPrice": false,
            "name": "EU tax",
          },
          {
            "amount": 0.1,
            "country": "GB",
            "includedInPrice": false,
            "name": "UK tax",
          },
        ],
      }
      `);
    });
  });
  
