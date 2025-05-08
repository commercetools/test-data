import type { TBuilder } from '../../../../core';
import type { TMcSettingsCustomApplicationPermission as McSettingsCustomApplicationPermission } from '../../../../graphql-types';

export type TCustomApplicationPermission = Omit<
  McSettingsCustomApplicationPermission,
  '__typename'
>;
export type TCustomApplicationPermissionGraphql =
  McSettingsCustomApplicationPermission;

export type TCustomApplicationPermissionBuilder =
  TBuilder<TCustomApplicationPermission>;
export type TCreateCustomApplicationPermissionBuilder =
  () => TCustomApplicationPermissionBuilder;
