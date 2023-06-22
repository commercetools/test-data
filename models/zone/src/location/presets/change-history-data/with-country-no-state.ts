import Location from '../../builder';

const withCountryNoState = () => Location().state(null!);

export default withCountryNoState;
