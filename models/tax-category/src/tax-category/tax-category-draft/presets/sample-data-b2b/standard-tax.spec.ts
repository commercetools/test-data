import type { TTaxCategoryDraft } from '../../../types';
import standardTax from './standard-tax';

describe(`with standardTax preset`, () => {
  it(`should return a standardTax preset`, () => {
    const standardTaxPreset = standardTax().build<TTaxCategoryDraft>();
    expect(standardTaxPreset).toMatchInlineSnapshot(`
      {
        "description": "Standard tax rates for all territories.",
        "key": "standard-tax",
        "name": "Standard Tax",
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
            "amount": 0.21,
            "country": "ES",
            "includedInPrice": true,
            "key": "vat-standard-es",
            "name": "Standard VAT for Spain",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "FR",
            "includedInPrice": true,
            "key": "vat-standard-fr",
            "name": "Standard VAT for France",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "GB",
            "includedInPrice": true,
            "key": "vat-standard-uk",
            "name": "Standard VAT for UK",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "US",
            "includedInPrice": true,
            "key": "vat-standard-us",
            "name": "Standard VAT for US",
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

  it(`should return a standardTax preset when built for graphql`, () => {
    const standardTaxPresetGraphql =
      standardTax().buildGraphql<TTaxCategoryDraft>();
    expect(standardTaxPresetGraphql).toMatchInlineSnapshot(`
      {
        "description": "Standard tax rates for all territories.",
        "key": "standard-tax",
        "name": "Standard Tax",
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
            "amount": 0.21,
            "country": "ES",
            "includedInPrice": true,
            "key": "vat-standard-es",
            "name": "Standard VAT for Spain",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "FR",
            "includedInPrice": true,
            "key": "vat-standard-fr",
            "name": "Standard VAT for France",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "GB",
            "includedInPrice": true,
            "key": "vat-standard-uk",
            "name": "Standard VAT for UK",
            "state": undefined,
            "subRates": [],
          },
          {
            "amount": 0.2,
            "country": "US",
            "includedInPrice": true,
            "key": "vat-standard-us",
            "name": "Standard VAT for US",
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
