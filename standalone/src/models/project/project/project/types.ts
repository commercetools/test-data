import type { Project } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCoreProject } from '@/graphql-types';

export type TProjectRest = Project & {
  id: string;
  isProductionProject: boolean;
  initialized: boolean;
};

export type TProjectGraphql = TCoreProject;

/**
 * @deprecated Use `TProjectRest` or `TProjectGraphql` instead.
 */
export type TProject = TProjectRest;

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

export type TProjectDraftBuilder = TBuilder<TProjectDraft>;
export type TCreateProjectDraftBuilder = () => TProjectDraftBuilder;

export type TCreateProjectBuilder<
  TProjectModel extends TProjectRest | TProjectGraphql,
> = () => TBuilder<TProjectModel>;
