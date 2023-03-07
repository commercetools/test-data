import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateProductDraftBuilder, TProductDraft } from '../types';

const Model: TCreateProductDraftBuilder = () =>
  Builder<TProductDraft>({
    generator,
    transformers,
  });

export default Model;
