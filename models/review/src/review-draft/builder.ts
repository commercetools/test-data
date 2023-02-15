import { Builder } from '@commercetools-test-data/core';
import type { TCreateReviewDraftBuilder, TReviewDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateReviewDraftBuilder = () =>
  Builder<TReviewDraft>({
    generator,
    transformers,
  });

export default Model;
