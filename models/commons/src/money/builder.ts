import { Builder } from '@commercetools-test-data/core';
import type { TCreateMoneyBuilder, TMoney } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoney>({
    generator,
    transformers,
  });

export default Model;
