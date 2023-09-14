import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const EU2TaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('EU2')
    .name('EU2')
    .description('')
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
    ])
export default EU2TaxCategory;
