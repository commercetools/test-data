import type { TReference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCoreTeam } from '@commercetools-test-data/graphql-types/src/generated/core';

export type TTeam = Omit<TCoreTeam, '__typename'>;

export type TTeamGraphql = TCoreTeam;

export type TTeamRest = {
  id: string;
  name: string;
  members: Array<TReference<'user'>>;
};

export type TTeamBuilder = TBuilder<TTeam | TTeamRest>;
export type TCreateTeamBuilder = () => TTeamBuilder;
