import { Transformer } from '@commercetools-test-data/core';
import type { TMcProjectDraft, TMcProjectDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TMcProjectDraft, TMcProjectDraft>('default', {}),
  rest: Transformer<TMcProjectDraft, TMcProjectDraft>('rest', {}),
  graphql: Transformer<TMcProjectDraft, TMcProjectDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'ProjectDraft',
    }),
  }),
};

export default transformers;
