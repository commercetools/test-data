import { Transformer } from '@commercetools-test-data/core';
import type { TProjectDraft, TProjectDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProjectDraft, TProjectDraft>('default', {}),
  rest: Transformer<TProjectDraft, TProjectDraft>('rest', {}),
  graphql: Transformer<TProjectDraft, TProjectDraftGraphql>('graphql', {}),
};

export default transformers;
