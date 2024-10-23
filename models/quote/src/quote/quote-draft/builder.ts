import { Builder } from '@commercetools-test-data/core';
import type { TQuoteDraft, TCreateQuoteDraftBuilder } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateQuoteDraftBuilder = () =>
  Builder<TQuoteDraft>({
    generator,
    transformers,
  });

export default Model;
