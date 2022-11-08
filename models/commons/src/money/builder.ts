import type { TCreateMoneyBuilder } from './types';
import { random as CentPrecisionMoneyBuilder } from './cent-precision-money';
import { random as HighPrecisionMoneyBuilder } from './high-precision-money';

const Model: TCreateMoneyBuilder = () => {
  const options = [CentPrecisionMoneyBuilder, HighPrecisionMoneyBuilder];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex]();
};

export default Model;
