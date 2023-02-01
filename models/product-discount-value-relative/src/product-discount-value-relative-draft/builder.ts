import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueRelativeDraftBuilder,
  TProductDiscountValueRelativeDraft,
} from './types';

const Model: TCreateProductDiscountValueRelativeDraftBuilder = () =>
  Builder<TProductDiscountValueRelativeDraft>({
    generator,
    transformers,
  });

export default Model;
