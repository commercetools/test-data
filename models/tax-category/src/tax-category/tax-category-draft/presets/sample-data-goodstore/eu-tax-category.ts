import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const EUTaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('EU')
    .name('EU')
    .description('')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('EU tax')
        .amount(0.1)
        .includedInPrice(false)
        .country('DE'),
      TaxRateDraft.presets
        .empty()
        .name('UK tax')
        .amount(0.1)
        .includedInPrice(false)
        .country('GB'),
    ])
export default EUTaxCategory;
