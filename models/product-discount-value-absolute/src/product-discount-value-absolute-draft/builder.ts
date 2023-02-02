import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueAbsoluteDraftBuilder,
  TProductDiscountValueAbsoluteDraft,
} from '../types';

const Model: TCreateProductDiscountValueAbsoluteDraftBuilder = () =>
  Builder<TProductDiscountValueAbsoluteDraft>({
    generator,
    transformers,
  });

export default Model;
