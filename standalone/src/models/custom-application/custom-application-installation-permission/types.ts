import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationInstallationPermission } from '@/graphql-types';

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
