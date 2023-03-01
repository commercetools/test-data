import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCart, TCreateCartBuilder } from './types';

const Model: TCreateCartBuilder = () =>
  Builder<TCart>({
    generator,
    transformers,
  });

export default Model;
