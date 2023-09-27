import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const standardTaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .name('Standard Tax Category')
    .key('standard-tax-category')
    .description('Standard Tax Category')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for UK')
        .amount(0.2)
        .includedInPrice(true)
        .country('GB')
        .key('vat-standard-uk')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for Germany')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .key('vat-standard-de')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('State Tax: North Carolina')
        .amount(0.0475)
        .includedInPrice(false)
        .country('US')
        .key('nc-state-tax')
        .state('North Carolina')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('State Tax: New York')
        .amount(0.04)
        .includedInPrice(false)
        .country('US')
        .key('ny-state-tax')
        .state('New York')
        .subRates([]),
    ]);

export default standardTaxCategory;
