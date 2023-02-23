import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductVariantDraftBuilder,
  TProductVariantDraft,
} from '../types';

const Model: TCreateProductVariantDraftBuilder = () =>
  Builder<TProductVariantDraft>({
    generator,
    transformers,
  });

export default Model;
