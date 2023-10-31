import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomView } from '@commercetools-test-data/custom-view';
import type { TCustomViewInstallationPermission } from '../custom-view-installation-permission/types';

// TODO: generate graphql types and use those
type ProjectExtension = {
  projectKey: string;
};

export type TRestrictedCustomViewInstallationForOrganization = {
  acceptedPermissions: TCustomViewInstallationPermission[];
  createdAt: string;
  customView: TCustomView;
  id: string;
  installInAllProjects: boolean;
  projects: ProjectExtension[];
  updatedAt: string;
};

export type TRestrictedCustomViewInstallationForOrganizationGraphql =
  TRestrictedCustomViewInstallationForOrganization & {
    __typename: 'RestrictedCustomViewInstallationForOrganization';
  };

export type TRestrictedCustomViewInstallationForOrganizationBuilder =
  TBuilder<TRestrictedCustomViewInstallationForOrganization>;
export type TCreateRestrictedCustomViewInstallationForOrganizationBuilder =
  () => TRestrictedCustomViewInstallationForOrganizationBuilder;
