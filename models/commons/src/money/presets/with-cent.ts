import type { TMoneyBuilder } from '../types';
import Money from '../builder';

const withCent = (centAmount = 10, currencyCode = 'EUR'): TMoneyBuilder =>
  Money().centAmount(centAmount).currencyCode(currencyCode);

export default withCent;
