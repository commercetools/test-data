import * as TaxRate from '../../../tax-rate';
import TaxCategoryDraft from '../builder';

const withTaxRateCountryUsaAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRate.TaxRateDraft.presets.withCountryUsaAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaAndIncludedInPrice;
