import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import vatStandardEu from './vat-standard-eu';
describe(`with vatStandardEu preset`, () => {
  it('should create a vatStandardEu taxcategory type draft', () => {
    const vatStandardEuPreset = vatStandardEu().build<TTaxCategoryDraft>();
    expect(vatStandardEuPreset).toMatchObject(
      JSON.parse(`{
  "description": "Standard VAT for EU",
  "key": "vat-standard-eu",
  "name": "VAT Standard",
  "rates": [
    {
      "name": "Standard VAT for UK",
      "amount": 0.2,
      "includedInPrice": true,
      "country": "GB",
      "key": "vat-standard-gb",
      "subRates": []
    },
    {
      "name": "Standard VAT for Germany",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "DE",
      "key": "vat-standard-de",
      "subRates": []
    }
  ]
}`)
    );
  });
});
