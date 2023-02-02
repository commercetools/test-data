import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueExternalDraftBuilder,
  TProductDiscountValueExternalDraft,
} from './types';

const Model: TCreateProductDiscountValueExternalDraftBuilder = () =>
  Builder<TProductDiscountValueExternalDraft>({
    generator,
    transformers,
  });

export default Model;
