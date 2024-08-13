import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TProductProjection,
  TCreateProductProjectionBuilder,
} from './types';

const Model: TCreateProductProjectionBuilder = () =>
  Builder<TProductProjection>({
    generator,
    transformers,
  });

export default Model;
