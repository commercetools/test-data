import * as TaxRateDraft from '../../../../tax-rate';
import TaxCategoryDraft from '../../builder';

const standardTaxCategory = () =>
  TaxCategoryDraft()
    .key('standard-tax')
    .name('Standard Tax Category')
    .description('')
    .rates([
      TaxRateDraft.random()
        .name('VAT')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
      TaxRateDraft.random()
        .name('GST')
        .amount(0.1)
        .includedInPrice(true)
        .country('AU')
        .subRates([]),
      TaxRateDraft.random()
        .name('VAT')
        .amount(0.21)
        .includedInPrice(true)
        .country('ES')
        .subRates([]),
      TaxRateDraft.random()
        .name('MA State Tax')
        .amount(0.0625)
        .includedInPrice(false)
        .country('US')
        .state('Massachusetts')
        .subRates([]),
      TaxRateDraft.random()
        .name('NJ Sales Tax')
        .amount(0.0663)
        .includedInPrice(false)
        .country('US')
        .state('New Jersey')
        .subRates([]),
      TaxRateDraft.random()
        .name('CA Sales Tax')
        .amount(0.07)
        .includedInPrice(false)
        .country('US')
        .state('California')
        .subRates([]),
    ]);

export default standardTaxCategory;
