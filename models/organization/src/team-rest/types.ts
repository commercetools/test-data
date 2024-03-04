import type { TReference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TTeamRest = {
  id: string;
  name: string;
  members: Array<TReference<'user'>>;
};
export type TTeamRestBuilder = TBuilder<TTeamRest>;
export type TCreateTeamRestBuilder = () => TTeamRestBuilder;
