import * as TaxRateDraft from '../../../tax-rate/tax-rate-draft';
import TaxCategoryDraft from '../builder';

const withTaxRateCountryUsaAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.withCountryUsaAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaAndIncludedInPrice;
