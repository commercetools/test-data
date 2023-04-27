import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateProductVariantDraftBuilder,
  TProductVariantDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductVariantDraftBuilder = () =>
  Builder<TProductVariantDraft>({
    generator,
    transformers,
  });

export default Model;
