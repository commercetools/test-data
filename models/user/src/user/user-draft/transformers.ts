import { Transformer } from '@commercetools-test-data/core';
import type { TUserDraft, TUserDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TUserDraft, TUserDraft>('default', {}),
  rest: Transformer<TUserDraft, TUserDraft>('rest', {}),
  graphql: Transformer<TUserDraft, TUserDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'UserDraft',
    }),
  }),
};

export default transformers;
