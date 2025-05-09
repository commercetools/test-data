import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const standardTaxCategory = () =>
  TaxCategoryDraft.presets
    .empty()
    .key('standard-tax')
    .name('Standard Tax Category')
    .description('Standard Tax Category')
    .rates([
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for Germany')
        .key('vat-standard-de')
        .amount(0.19)
        .includedInPrice(true)
        .country('DE')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for UK')
        .key('vat-standard-uk')
        .amount(0.2)
        .includedInPrice(true)
        .country('GB')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for US')
        .key('vat-standard-us')
        .amount(0.2)
        .includedInPrice(true)
        .country('US')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('State Tax: North Carolina')
        .key('nc-state-tax')
        .amount(0.0475)
        .includedInPrice(false)
        .country('US')
        .state('North Carolina')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('State Tax: New York')
        .key('ny-state-tax')
        .amount(0.04)
        .includedInPrice(false)
        .country('US')
        .state('New York')
        .subRates([]),
    ]);

export default standardTaxCategory;
