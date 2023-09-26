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
        "description": "Standard Tax Category",
        "key": "standard-tax",
        "name": "Standard Tax Category",
        "rates": [
          {
            "amount": 0.19,
            "country": "DE",
            "includedInPrice": true,
            "key": "vat-standard-de",
            "name": "Standard VAT for Germany",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "UK",
            "includedInPrice": true,
            "key": "vat-standard-uk",
            "name": "Standard VAT for UK",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.0475,
            "country": "US",
            "includedInPrice": false,
            "key": "nc-state-tax",
            "name": "State Tax: North Carolina",
            "state": "North Carolina",
            "subRates": [],
          },
          {
            "amount": 0.04,
            "country": "US",
            "includedInPrice": false,
            "key": "ny-state-tax",
            "name": "State Tax: New York",
            "state": "New York",
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
        "description": "Standard Tax Category",
        "key": "standard-tax",
        "name": "Standard Tax Category",
        "rates": [
          {
            "amount": 0.19,
            "country": "DE",
            "includedInPrice": true,
            "key": "vat-standard-de",
            "name": "Standard VAT for Germany",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "UK",
            "includedInPrice": true,
            "key": "vat-standard-uk",
            "name": "Standard VAT for UK",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.0475,
            "country": "US",
            "includedInPrice": false,
            "key": "nc-state-tax",
            "name": "State Tax: North Carolina",
            "state": "North Carolina",
            "subRates": [],
          },
          {
            "amount": 0.04,
            "country": "US",
            "includedInPrice": false,
            "key": "ny-state-tax",
            "name": "State Tax: New York",
            "state": "New York",
            "subRates": [],
          },
        ],
      }
    `);
  });
});
