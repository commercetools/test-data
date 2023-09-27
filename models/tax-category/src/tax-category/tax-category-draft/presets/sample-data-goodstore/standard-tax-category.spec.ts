import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import standardTaxCategory from './standard-tax-category';
describe(`with standardTaxCategory preset`, () => {
  it('should create a standardTaxCategory taxcategory type draft', () => {
    const standardTaxCategoryPreset =
      standardTaxCategory().build<TTaxCategoryDraft>();
    expect(standardTaxCategoryPreset).toMatchObject(
      JSON.parse(`{
  "description": "Standard Tax Category",
  "key": "standard-tax-category",
  "name": "Standard Tax Category",
  "rates": [
    {
      "name": "Standard VAT for UK",
      "amount": 0.2,
      "includedInPrice": true,
      "country": "GB",
      "key": "vat-standard-uk",
      "subRates": []
    },
    {
      "name": "Standard VAT for Germany",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "DE",
      "key": "vat-standard-de",
      "subRates": []
    },
    {
      "name": "State Tax: North Carolina",
      "amount": 0.0475,
      "includedInPrice": false,
      "country": "US",
      "state": "North Carolina",
      "key": "nc-state-tax",
      "subRates": []
    },
    {
      "name": "State Tax: New York",
      "amount": 0.04,
      "includedInPrice": false,
      "country": "US",
      "state": "New York",
      "key": "ny-state-tax",
      "subRates": []
    }
  ]
}`)
    );
  });

  it('should create a standardTaxCategory tax category type draft when built for Graphql', () => {
    const standardTaxCategoryPresetGraphql =
      standardTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();
    expect(standardTaxCategoryPresetGraphql).toMatchObject(
      JSON.parse(`{
  "description": "Standard Tax Category",
  "key": "standard-tax-category",
  "name": "Standard Tax Category",
  "rates": [
    {
      "name": "Standard VAT for UK",
      "amount": 0.2,
      "includedInPrice": true,
      "country": "GB",
      "key": "vat-standard-uk",
      "subRates": []
    },
    {
      "name": "Standard VAT for Germany",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "DE",
      "key": "vat-standard-de",
      "subRates": []
    },
    {
      "name": "State Tax: North Carolina",
      "amount": 0.0475,
      "includedInPrice": false,
      "country": "US",
      "state": "North Carolina",
      "key": "nc-state-tax",
      "subRates": []
    },
    {
      "name": "State Tax: New York",
      "amount": 0.04,
      "includedInPrice": false,
      "country": "US",
      "state": "New York",
      "key": "ny-state-tax",
      "subRates": []
    }
  ]
}
`)
    );
  });
});
