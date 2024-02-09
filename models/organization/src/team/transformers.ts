import { Transformer } from '@commercetools-test-data/core';
import type { TTeam, TTeamRest, TTeamGraphql } from './types';

const transformers = {
  default: Transformer<TTeam, TTeam>('default', {}),
  rest: Transformer<TTeam, TTeamRest>('rest', {
    addFields: () => ({
      members: ['member1', 'member2'],
    }),
  }),
  graphql: Transformer<TTeam, TTeamGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Team',
      members: [],
    }),
  }),
};

export default transformers;
