import MoneyDraft from '../builder';

const withCent = (centAmount = 10, currencyCode = 'USD') =>
  MoneyDraft().centAmount(centAmount).currencyCode(currencyCode);

export default withCent;
