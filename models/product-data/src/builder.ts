import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TProductData, TCreateProductDataBuilder } from './types';

const Model: TCreateProductDataBuilder = () =>
  Builder<TProductData>({
    generator,
    transformers,
  });

export default Model;
