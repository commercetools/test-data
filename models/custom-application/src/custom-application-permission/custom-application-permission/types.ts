import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermission as McSettingsCustomApplicationPermission } from '@commercetools-test-data/graphql-types';

// why do we need renaming?
export type TCustomApplicationPermission = Omit<
  McSettingsCustomApplicationPermission,
  '__typename'
>;
export type TCustomApplicationPermissionGraphql =
  McSettingsCustomApplicationPermission;

// why export not used elsewhere?
// export type TCustomApplicationPermissionBuilder =
//   TBuilder<TCustomApplicationPermission>;

// export type TCreateCustomApplicationPermissionBuilder =
//   () => TCustomApplicationPermissionBuilder;

// maybe like this?
export type TCreateCustomApplicationPermissionBuilder =
  () => TBuilder<TCustomApplicationPermission>;
