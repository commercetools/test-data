import type { TBuilder } from '@commercetools-test-data/core';
import type { TTeam } from '../team';

export type TOrganization = {
  id: string;
  version: number;
  name: string;
  teams: TTeam[];
  defaultClusters: null;
  createdAt: string;
  lastModifiedAt: string;
};

export type TOrganizationGraphql = TOrganization & {
  __typename: 'Organization';
};

export type TOrganizationDraft = {
  name: string;
  owner: null; //Update type
  defaultClusters: null;
};

export type TOrganizationDraftGraphql = TOrganizationDraft & {
  __typename: 'OrganizationDraft';
};

export type TOrganizationBuilder = TBuilder<TOrganization>;
export type TOrganizationDraftBuilder = TBuilder<TOrganizationDraft>;
export type TCreateOrganizationBuilder = () => TOrganizationBuilder;
export type TCreateOrganizationDraftBuilder = () => TOrganizationDraftBuilder;
