import { Builder } from '@commercetools-test-data/core';
import type { TCreateMoneyBuilder, THighPrecisionMoney } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMoneyBuilder = () =>
  Builder<THighPrecisionMoney>({
    generator,
    transformers,
  });

export default Model;
