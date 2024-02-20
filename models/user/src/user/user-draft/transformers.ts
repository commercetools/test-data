import { Transformer } from '@commercetools-test-data/core';
import type { TUserDraft, TUserDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TUserDraft, TUserDraft>('default', {}),
  rest: Transformer<TUserDraft, TUserDraft>('rest', {}),
  graphql: Transformer<TUserDraft, TUserDraftGraphql>('graphql', {}),
};

export default transformers;
