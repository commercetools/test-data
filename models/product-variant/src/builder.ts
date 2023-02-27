import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TProductVariant, TCreateProductVariantBuilder } from './types';

const Model: TCreateProductVariantBuilder = () =>
  Builder<TProductVariant>({
    generator,
    transformers,
  });

export default Model;
