import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';
const eu2  = () =>
  TaxCategoryDraft.presets
    .empty()
    .name('EU2')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('Germany')
        .amount(0.1)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('United Kingdom')
        .amount(0.1)
        .includedInPrice(true)
        .country('GB')
        .subRates([]),
    ]);

export default eu2;