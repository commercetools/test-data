import type { TBuilder } from '@/core';
import type { TCoreTeam } from '@/graphql-types';
import type { TReference } from '@/models/commons';

export type TTeamGraphql = TCoreTeam;

export type TTeam = {
  id: string;
  name: string;
  members: Array<TReference<'user'>>;
};

export type TTeamBuilder = TBuilder<TTeam>;
export type TCreateTeamBuilder = () => TTeamBuilder;
