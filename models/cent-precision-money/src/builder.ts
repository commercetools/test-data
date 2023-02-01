import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCentPrecisionMoney,
  TCreateCentPrecisionMoneyBuilder,
} from './types';

const Model: TCreateCentPrecisionMoneyBuilder = () =>
  Builder<TCentPrecisionMoney>({
    generator,
    transformers,
  });

export default Model;
