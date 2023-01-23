import TaxRateDraft from '../builder';

const withCountryUsaAndIncludedInPrice = () =>
  TaxRateDraft().country('US').includedInPrice(true);

export default withCountryUsaAndIncludedInPrice;
