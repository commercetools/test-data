import * as TaxRateDraft from '../../../../tax-rate/tax-rate-draft';
import TaxCategoryDraft from '../../builder';

const withTaxRateCountryUsNoState = () =>
  TaxCategoryDraft().rates([
    TaxRateDraft.presets.changeHistoryData.withCountryCodeUsNoState(),
  ]);

export default withTaxRateCountryUsNoState;
