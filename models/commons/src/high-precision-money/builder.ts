import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  THighPrecisionMoney,
  TCreateHighPrecisionMoneyBuilder,
} from './types';

const Model: TCreateHighPrecisionMoneyBuilder = () =>
  Builder<THighPrecisionMoney>({
    name: 'HighPrecisionMoney',
    generator,
    transformers,
  });

export default Model;
