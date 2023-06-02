import TaxRateDraft from '../../builder';

const withCountryCodeUsNoStateIncludedInPrice = () =>
  TaxRateDraft().state(null!).country('US').includedInPrice(true);

export default withCountryCodeUsNoStateIncludedInPrice;
