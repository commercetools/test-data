import { Builder } from '@commercetools-test-data/core';
import type { TCreateMoneyBuilder, TCentPrecisionMoney } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMoneyBuilder = () =>
  Builder<TCentPrecisionMoney>({
    generator,
    transformers,
  });

export default Model;
