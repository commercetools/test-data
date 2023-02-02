import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TMoney, TCreateMoneyBuilder } from './types';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoney>({
    generator,
    transformers,
  });

export default Model;
