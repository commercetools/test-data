import TaxCategoryDraft from '../builder';
import * as TaxRateDraft from '../../../../tax-rate/src/tax-rate-draft';

const withTaxRateCountryUsaAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.withCountryUsaAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaAndIncludedInPrice;
