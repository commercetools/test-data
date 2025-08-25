import type { TBuilder } from '@/core';
import type { TCoreTeam } from '@/graphql-types';
import type { TReferenceRest } from '@/models/commons';

/**
 * @deprecated use `TTeamRest` or `TTeamGraphql` instead
 */
export type TTeam = TTeamRest;

export type TTeamRest = {
  id: string;
  name: string;
  members: Array<TReferenceRest<'user'>>;
};

export type TTeamGraphql = TCoreTeam;

export type TCreateTeamBuilder<
  TTeamModel extends TTeamRest | TTeamGraphql = TTeamRest,
> = () => TBuilder<TTeamModel>;
