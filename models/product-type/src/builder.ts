import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateProductTypeBuilder, TProductTypeDefault } from './types';

const Model: TCreateProductTypeBuilder = () =>
  Builder<TProductTypeDefault>({
    generator,
    transformers,
  });

export default Model;
