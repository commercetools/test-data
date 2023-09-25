import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const USTaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('us-tax')
    .name('US Tax Category')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('NY Sales Tax')
        .amount(0.04)
        .includedInPrice(false)
        .country('US')
        .state('New York')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('NC Sales Tax')
        .amount(0.0475)
        .includedInPrice(false)
        .country('US')
        .state('North Carolina')
        .subRates([]),
    ]);

export default USTaxCategory;
