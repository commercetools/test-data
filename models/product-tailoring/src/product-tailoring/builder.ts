import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TProductTailoring,
  TCreateProductTailoringBuilder,
} from './types';

const Model: TCreateProductTailoringBuilder = () =>
  Builder<TProductTailoring>({
    generator,
    transformers,
  });

export default Model;
