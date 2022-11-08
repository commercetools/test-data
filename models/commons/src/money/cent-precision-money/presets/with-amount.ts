import type { TMoneyBuilder } from '../../types';
import Money from '../builder';

const withAmount = (centAmount = 10, currencyCode = 'EUR'): TMoneyBuilder =>
  Money().centAmount(centAmount).currencyCode(currencyCode);

export default withAmount;
