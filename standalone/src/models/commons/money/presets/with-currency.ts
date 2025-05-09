import Money from '../builder';

const withCurrency = (currency = 'USD') => Money().currencyCode(currency);

export default withCurrency;
