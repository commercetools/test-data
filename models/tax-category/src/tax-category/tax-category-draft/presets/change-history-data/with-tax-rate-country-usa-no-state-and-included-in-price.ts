import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import TaxCategoryDraft from '../../builder';

const withTaxRateCountryUsaNoStateAndIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.changeHistoryData.withCountryUsaNoStateAndIncludedInPrice(),
  ]);

export default withTaxRateCountryUsaNoStateAndIncludedInPrice;
