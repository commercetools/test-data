import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationInstallationPermission } from '@/graphql-types';

export type TCustomApplicationInstallationPermissionGraphql =
  TMcSettingsCustomApplicationInstallationPermission;

export type TCreateCustomApplicationInstallationPermissionBuilder<
  TModel extends TCustomApplicationInstallationPermissionGraphql,
> = () => TBuilder<TModel>;
