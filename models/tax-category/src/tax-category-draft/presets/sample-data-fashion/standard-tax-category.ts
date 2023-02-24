import TaxCategoryDraft from '../../builder';

const standardTaxCategory = () =>
  TaxCategoryDraft()
    .key('standard-tax')
    .name('Standard Tax Category')
    .description('')
    .rates([
      {
        name: 'VAT',
        amount: 0.19,
        includedInPrice: true,
        country: 'DE',
        subRates: [],
      },
      {
        name: 'GST',
        amount: 0.1,
        includedInPrice: true,
        country: 'AU',
        subRates: [],
      },
      {
        name: 'VAT',
        amount: 0.21,
        includedInPrice: true,
        country: 'ES',
        subRates: [],
      },
      {
        name: 'MA State Tax',
        amount: 0.0625,
        includedInPrice: false,
        country: 'US',
        state: 'Massachusetts',
        subRates: [],
      },
      {
        name: 'NJ Sales Tax',
        amount: 0.0663,
        includedInPrice: false,
        country: 'US',
        state: 'New Jersey',
        subRates: [],
      },
      {
        name: 'CA Sales Tax',
        amount: 0.07,
        includedInPrice: false,
        country: 'US',
        state: 'California',
        subRates: [],
      },
    ]);

export default standardTaxCategory;
