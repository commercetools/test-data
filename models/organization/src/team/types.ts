import type { TReference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCoreTeam } from '@commercetools-test-data/graphql-types/src/generated/core';

export type TTeamGraphql = TCoreTeam;

export type TTeam = {
  id: string;
  name: string;
  members: Array<TReference<'user'>>;
};

export type TTeamBuilder = TBuilder<TTeam>;
export type TCreateTeamBuilder = () => TTeamBuilder;
