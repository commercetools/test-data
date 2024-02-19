import type { Project } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProject = Project & {
  id: string;
  isProductionProject: boolean;
  initialized: boolean;
};
export type TProjectGraphql = TProject & {
  __typename: 'Project';
};
export type TProjectDraft = {
  key: string;
  name: string;
  ownerId: string;
  countries: string[];
  currencies: string[];
  languages: string[];
};
export type TProjectDraftGraphql = TProjectDraft & {
  __typename: 'ProjectDraft';
};

export type TProjectBuilder = TBuilder<TProject>;
export type TProjectDraftBuilder = TBuilder<TProjectDraft>;
export type TCreateProjectBuilder = () => TProjectBuilder;
export type TCreateProjectDraftBuilder = () => TProjectDraftBuilder;
