import { Transformer } from '@commercetools-test-data/core';
import type { TTeam, TTeamGraphql } from './types';

const transformers = {
  default: Transformer<TTeam, TTeam>('default', {
    buildFields: ['members', 'membersRef'],
  }),
  graphql: Transformer<TTeam, TTeamGraphql>('graphql', {
    buildFields: ['members', 'membersRef'],
    addFields: () => ({
      __typename: 'Team',
    }),
  }),
};

export default transformers;
