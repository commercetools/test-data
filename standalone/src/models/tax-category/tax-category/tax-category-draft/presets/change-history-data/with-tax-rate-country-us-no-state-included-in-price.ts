import { TaxRateDraft } from '../../../../tax-rate/tax-rate-draft';
import TaxCategoryDraft from '../../builder';

const withTaxRateCountryUsNoStateIncludedInPrice = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.changeHistoryData.withCountryCodeUsNoStateIncludedInPrice(),
  ]);

export default withTaxRateCountryUsNoStateIncludedInPrice;
