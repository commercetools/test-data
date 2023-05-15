import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import standardTaxCategory from './standard-tax-category';

describe('with a tax rate preset `standard tax category`', () => {
  it('should return a tax category with name `Standard Tax Category` and 6 tax rates', () => {
    const taxCategory = standardTaxCategory().build<TTaxCategoryDraft>();

    expect(taxCategory).toMatchInlineSnapshot(`
      {
        "description": "",
        "key": "standard-tax",
        "name": "Standard Tax Category",
        "rates": [
          {
            "amount": 0.19,
            "country": "DE",
            "includedInPrice": true,
            "name": "VAT",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.1,
            "country": "AU",
            "includedInPrice": true,
            "name": "GST",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.21,
            "country": "ES",
            "includedInPrice": true,
            "name": "VAT",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.0625,
            "country": "US",
            "includedInPrice": false,
            "name": "MA State Tax",
            "state": "Massachusetts",
            "subRates": [],
          },
          {
            "amount": 0.0663,
            "country": "US",
            "includedInPrice": false,
            "name": "NJ Sales Tax",
            "state": "New Jersey",
            "subRates": [],
          },
          {
            "amount": 0.07,
            "country": "US",
            "includedInPrice": false,
            "name": "CA Sales Tax",
            "state": "California",
            "subRates": [],
          },
        ],
      }
    `);
  });

  it('should return a tax category with name `Standard Tax Category` when built for graphql', () => {
    const taxCategoryGraphql =
      standardTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
    expect(taxCategoryGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "TaxCategoryDraft",
        "description": "",
        "key": "standard-tax",
        "name": "Standard Tax Category",
        "rates": [
          {
            "__typename": "TaxRateDraft",
            "amount": 0.19,
            "country": "DE",
            "includedInPrice": true,
            "name": "VAT",
            "state": undefined,
            "subRates": [],
          },
          {
            "__typename": "TaxRateDraft",
            "amount": 0.1,
            "country": "AU",
            "includedInPrice": true,
            "name": "GST",
            "state": undefined,
            "subRates": [],
          },
          {
            "__typename": "TaxRateDraft",
            "amount": 0.21,
            "country": "ES",
            "includedInPrice": true,
            "name": "VAT",
            "state": undefined,
            "subRates": [],
          },
          {
            "__typename": "TaxRateDraft",
            "amount": 0.0625,
            "country": "US",
            "includedInPrice": false,
            "name": "MA State Tax",
            "state": "Massachusetts",
            "subRates": [],
          },
          {
            "__typename": "TaxRateDraft",
            "amount": 0.0663,
            "country": "US",
            "includedInPrice": false,
            "name": "NJ Sales Tax",
            "state": "New Jersey",
            "subRates": [],
          },
          {
            "__typename": "TaxRateDraft",
            "amount": 0.07,
            "country": "US",
            "includedInPrice": false,
            "name": "CA Sales Tax",
            "state": "California",
            "subRates": [],
          },
        ],
      }
    `);
  });
});
