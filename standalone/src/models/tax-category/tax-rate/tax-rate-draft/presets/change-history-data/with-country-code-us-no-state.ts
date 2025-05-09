import TaxRateDraft from '../../builder';

const withCountryCodeUsNoState = () =>
  TaxRateDraft().state(null!).country('US');

export default withCountryCodeUsNoState;
