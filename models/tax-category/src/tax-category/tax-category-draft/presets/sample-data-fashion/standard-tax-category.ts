import * as TaxRate from '@commercetools-test-data/tax-rate';
import TaxCategoryDraft from '../../builder';

const standardTaxCategory = () =>
  TaxCategoryDraft()
    .key('standard-tax')
    .name('Standard Tax Category')
    .description('')
    .rates([
      TaxRate.TaxRateDraft.random()
        .name('VAT')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
      TaxRate.TaxRateDraft.random()
        .name('GST')
        .amount(0.1)
        .includedInPrice(true)
        .country('AU')
        .subRates([]),
      TaxRate.TaxRateDraft.random()
        .name('VAT')
        .amount(0.21)
        .includedInPrice(true)
        .country('ES')
        .subRates([]),
      TaxRate.TaxRateDraft.random()
        .name('MA State Tax')
        .amount(0.0625)
        .includedInPrice(false)
        .country('US')
        .state('Massachusetts')
        .subRates([]),
      TaxRate.TaxRateDraft.random()
        .name('NJ Sales Tax')
        .amount(0.0663)
        .includedInPrice(false)
        .country('US')
        .state('New Jersey')
        .subRates([]),
      TaxRate.TaxRateDraft.random()
        .name('CA Sales Tax')
        .amount(0.07)
        .includedInPrice(false)
        .country('US')
        .state('California')
        .subRates([]),
    ]);

export default standardTaxCategory;
