import TaxRateDraft from '../../builder';

const withCountryUsaNoStateAndIncludedInPrice = () =>
  TaxRateDraft().state(undefined).country('US').includedInPrice(true);

export default withCountryUsaNoStateAndIncludedInPrice;
