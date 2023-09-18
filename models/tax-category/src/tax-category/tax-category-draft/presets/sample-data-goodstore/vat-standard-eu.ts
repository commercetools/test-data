import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const vatStandardEu = () =>
  TaxCategoryDraft.presets
    .empty()
    .name('VAT Standard')
    .key('vat-standard-eu')
    .description('Standard VAT for EU')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for UK')
        .amount(0.2)
        .includedInPrice(true)
        .country('GB')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for Germany')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
    ]);

export default vatStandardEu;
