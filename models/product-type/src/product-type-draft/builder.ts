import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateProductTypeDraftBuilder,
  TProductTypeDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductTypeDraftBuilder = () =>
  Builder<TProductTypeDraft>({
    generator,
    transformers,
  });

export default Model;
