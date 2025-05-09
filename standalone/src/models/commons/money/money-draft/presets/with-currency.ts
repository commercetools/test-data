import MoneyDraft from '../builder';

const withCurrency = (currency = 'USD') => MoneyDraft().currencyCode(currency);

export default withCurrency;
