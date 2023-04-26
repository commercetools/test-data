import { Builder } from '@commercetools-test-data/core';
import type { TCreateProductDraftBuilder, TProductDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductDraftBuilder = () =>
  Builder<TProductDraft>({
    generator,
    transformers,
  });

export default Model;
