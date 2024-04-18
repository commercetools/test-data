import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  THighPrecisionMoney,
  TCreateHighPrecisionMoneyBuilder,
} from './types';

const Model: TCreateHighPrecisionMoneyBuilder = () =>
  Builder<THighPrecisionMoney>({
    generator,
    transformers,
  });

export default Model;
