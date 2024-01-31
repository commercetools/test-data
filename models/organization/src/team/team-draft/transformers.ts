import { Transformer } from '@commercetools-test-data/core';
import type { TTeamDraft, TTeamDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTeamDraft, TTeamDraft>('default', {}),
  rest: Transformer<TTeamDraft, TTeamDraft>('rest', {}),
  graphql: Transformer<TTeamDraft, TTeamDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'TeamDraft',
    }),
  }),
};

export default transformers;
