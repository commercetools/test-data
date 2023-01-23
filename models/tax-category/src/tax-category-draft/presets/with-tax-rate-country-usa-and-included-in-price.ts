import TaxCategoryDraft from '../builder';
import { TaxRateDraft } from '@commercetools-test-data/tax-rate';

const withTaxRateCountryUsaAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.withCountryUsaAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaAndIncludedInPrice;
