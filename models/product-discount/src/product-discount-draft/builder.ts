import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountDraftBuilder,
  TProductDiscountDraft,
} from '../types';

const Model: TCreateProductDiscountDraftBuilder = () =>
  Builder<TProductDiscountDraft>({
    generator,
    transformers,
  });

export default Model;
