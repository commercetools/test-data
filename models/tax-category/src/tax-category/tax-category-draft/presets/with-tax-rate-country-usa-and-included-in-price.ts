import { TaxRateDraft } from '@commercetools-test-data/tax-rate';
import TaxCategoryDraft from '../builder';

const withTaxRateCountryUsaAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.withCountryUsaAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaAndIncludedInPrice;
