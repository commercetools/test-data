import type { TBuilder } from '@commercetools-test-data/core';
import type { TCoreTeam } from '@commercetools-test-data/graphql-types/src/generated/core';

export type TTeam = Omit<TCoreTeam, '__typename'>;

export type TTeamGraphql = TCoreTeam;

export type TTeamBuilder = TBuilder<TTeam>;
export type TCreateTeamBuilder = () => TTeamBuilder;
