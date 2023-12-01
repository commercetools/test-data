import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomViewInstallationPermission } from '../../../../graphql-types';

export type TCustomViewInstallationPermissionGraphql =
  TMcSettingsCustomViewInstallationPermission;

export type TCustomViewInstallationPermission = Omit<
  TCustomViewInstallationPermissionGraphql,
  '__typename'
>;

export type TCustomViewInstallationPermissionBuilder =
  TBuilder<TCustomViewInstallationPermission>;
export type TCreateCustomViewInstallationPermissionBuilder =
  () => TCustomViewInstallationPermissionBuilder;
