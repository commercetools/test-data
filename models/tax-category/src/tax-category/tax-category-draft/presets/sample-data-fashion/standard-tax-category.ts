import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const standardTaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('standard-tax')
    .name('Standard Tax Category')
    .description('')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('VAT')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('GST')
        .amount(0.1)
        .includedInPrice(true)
        .country('AU')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('VAT')
        .amount(0.21)
        .includedInPrice(true)
        .country('ES')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('MA State Tax')
        .amount(0.0625)
        .includedInPrice(false)
        .country('US')
        .state('Massachusetts')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('NJ Sales Tax')
        .amount(0.0663)
        .includedInPrice(false)
        .country('US')
        .state('New Jersey')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('CA Sales Tax')
        .amount(0.07)
        .includedInPrice(false)
        .country('US')
        .state('California')
        .subRates([]),
    ]);

export default standardTaxCategory;
