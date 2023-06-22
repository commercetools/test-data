import Location from '../../builder';

const withCountryNoState = () => Location().country('US').state(null!);

export default withCountryNoState;
