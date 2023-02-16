import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateProductTypeDraftBuilder,
  TProductTypeDraftDefault,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductTypeDraftBuilder = () =>
  Builder<TProductTypeDraftDefault>({
    generator,
    transformers,
  });

export default Model;
