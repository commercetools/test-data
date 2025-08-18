import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceRest, ReferenceGraphql } from '@/models/commons/reference';
import { User } from '@/models/user';
import type { TTeamGraphql, TTeamRest } from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  name: fake((f) => f.commerce.department()),
};

export const restFieldsConfig: TModelFieldsConfig<TTeamRest> = {
  fields: {
    ...commonFieldsConfig,
    members: fake(() => [ReferenceRest.random().typeId('user')]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTeamGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Team',
    members: [User.random().buildGraphql()],
    membersRef: [ReferenceGraphql.random().typeId('user').build()],
  },
};
