import Money from '../builder';

const withCent = (centAmount = 10, currencyCode = 'USD') =>
  Money().centAmount(centAmount).currencyCode(currencyCode);

export default withCent;
