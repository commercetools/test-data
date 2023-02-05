import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateReviewDraftBuilder, TReviewDraft } from '../types';

const Model: TCreateReviewDraftBuilder = () =>
  Builder<TReviewDraft>({
    generator,
    transformers,
  });

export default Model;
