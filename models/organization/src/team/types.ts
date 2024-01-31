import type { TBuilder } from '@commercetools-test-data/core';

export type TTeam = {
  id: string;
  name: string;
  members: []; // should be array of users. TODO: update when user model is ready
};

export type TTeamGraphql = TTeam & {
  __typename: 'Team';
};

export type TTeamDraft = {
  name: string;
  members: []; // should be array of users. TODO: update when user model is ready
};

export type TTeamDraftGraphql = TTeamDraft & {
  __typename: 'TeamDraft';
};

export type TTeamBuilder = TBuilder<TTeam>;
export type TTeamDraftBuilder = TBuilder<TTeamDraft>;
export type TCreateTeamBuilder = () => TTeamBuilder;
export type TCreateTeamDraftBuilder = () => TTeamDraftBuilder;
