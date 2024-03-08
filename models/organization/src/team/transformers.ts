import { Reference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { User } from '@commercetools-test-data/user';
import type { TTeam, TTeamGraphql, TTeamRest } from './types';

const transformers = {
  default: Transformer<TTeamRest, TTeamRest>('default', {
    buildFields: ['members'],
  }),
  rest: Transformer<TTeamRest, TTeamRest>('rest', {
    buildFields: ['members'],
  }),
  graphql: Transformer<TTeam, TTeamGraphql>('graphql', {
    buildFields: ['members'],
    replaceFields: ({ fields }) => ({
      ...(fields as TTeam),
      members: [User.random().buildGraphql()],
      membersRef: [Reference.random().typeId('user').buildGraphql()],
      __typename: 'Team',
    }),
  }),
};

export default transformers;
