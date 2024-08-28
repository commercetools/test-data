import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TLimit, TCreateLimitBuilder } from './types';

const Model: TCreateLimitBuilder = () =>
  Builder<TLimit>({
    generator,
    transformers,
  });

export default Model;
