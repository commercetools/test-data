import { Transformer } from '@commercetools-test-data/core';
import type { TProjectDraft, TProjectDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TProjectDraft, TProjectDraft>('default', {}),
  rest: Transformer<TProjectDraft, TProjectDraftGraphql>('rest', {}),
  graphql: Transformer<TProjectDraft, TProjectDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'ProjectDraft',
    }),
  }),
};

export default transformers;
