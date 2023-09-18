import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';
const eu  = () =>
  TaxCategoryDraft.presets
    .empty()
    .name('EU')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('EU tax')
        .amount(0.1)
        .includedInPrice(false)
        .country('DE')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('UK tax')
        .amount(0.1)
        .includedInPrice(false)
        .country('GB')
        .subRates([]),
    ]);

export default eu;