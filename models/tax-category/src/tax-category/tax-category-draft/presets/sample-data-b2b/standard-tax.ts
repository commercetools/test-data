import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import * as TaxCategoryDraft from '../../index';

const standardTax = () =>
  TaxCategoryDraft.presets
    .empty()
    .name('Standard Tax')
    .key('standard-tax')
    .description('Standard tax rates for all territories.')
    .rates([
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
        .name('Standard VAT for Spain')
        .amount(0.21)
        .includedInPrice(true)
        .country('ES')
        .key('vat-standard-es')
        .subRates([]),
      TaxRateDraft.presets
        .empty()
        .name('Standard VAT for France')
        .amount(0.2)
        .includedInPrice(true)
        .country('FR')
        .key('vat-standard-fr')
        .subRates([]),
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
        .name('Standard VAT for US')
        .amount(0.2)
        .includedInPrice(true)
        .country('US')
        .key('vat-standard-us')
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

export default standardTax;
