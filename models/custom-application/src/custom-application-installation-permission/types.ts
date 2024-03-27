import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationInstallationPermission } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationInstallationPermissionGraphql =
  TMcSettingsCustomApplicationInstallationPermission;

export type TCustomApplicationInstallationPermission = Omit<
  TCustomApplicationInstallationPermissionGraphql,
  '__typename'
>;

export type TCustomApplicationInstallationPermissionBuilder =
  TBuilder<TCustomApplicationInstallationPermission>;
export type TCreateCustomApplicationInstallationPermissionBuilder =
  () => TCustomApplicationInstallationPermissionBuilder;
