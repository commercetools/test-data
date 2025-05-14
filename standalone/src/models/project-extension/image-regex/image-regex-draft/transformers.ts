import { Transformer } from '@/core';
import type { TImageRegexDraft, TImageRegexDraftGraphql } from './types';

const buildFields: (keyof TImageRegexDraft)[] = [];

const transformers = {
  default: Transformer<TImageRegexDraft, TImageRegexDraft>('default', {
    buildFields,
  }),
  graphql: Transformer<TImageRegexDraft, TImageRegexDraftGraphql>('graphql', {
    buildFields,
  }),
};

export default transformers;
