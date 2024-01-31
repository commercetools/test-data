import { Transformer } from '@commercetools-test-data/core';
import type { TTeam, TTeamGraphql } from './types';

const transformers = {
  default: Transformer<TTeam, TTeam>('default', {}),
  rest: Transformer<TTeam, TTeam>('rest', {}),
  graphql: Transformer<TTeam, TTeamGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Team',
    }),
  }),
};

export default transformers;
