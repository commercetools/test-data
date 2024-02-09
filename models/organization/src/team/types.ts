import type { TBuilder } from '@commercetools-test-data/core';

export type TTeam = {
  id: string;
  name: string;
};

export type TTeamRest = TTeam & {
  members: string[];
};

type TUser = {
  email: string;
};

export type TTeamGraphql = TTeam & {
  __typename: 'Team';
  members: TUser[]; // should be array of users. TODO: update when user model is ready
};

export type TTeamDraft = {
  name: string;
  members: string[];
};

export type TTeamDraftGraphql = TTeamDraft & {
  __typename: 'TeamDraft';
  members: TUser[]; // should be array of users. TODO: update when user model is ready
};

export type TTeamBuilder = TBuilder<TTeam>;
export type TTeamDraftBuilder = TBuilder<TTeamDraft>;
export type TCreateTeamBuilder = () => TTeamBuilder;
export type TCreateTeamDraftBuilder = () => TTeamDraftBuilder;
