import { Transformer } from '@/core';
import { Reference } from '@/models/commons';
import { User } from '@/models/user';
import type { TTeam, TTeamGraphql } from './types';

const transformers = {
  default: Transformer<TTeam, TTeam>('default', {
    buildFields: ['members'],
  }),
  rest: Transformer<TTeam, TTeam>('rest', {
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
