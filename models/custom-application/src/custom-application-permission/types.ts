import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermission as McSettingsCustomApplicationPermission } from '@commercetools-test-data/graphql-types';

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

export type TCustomApplicationPermissionDraftBuilder =
  TBuilder<TCustomApplicationPermission>;
export type TCreateCustomApplicationPermissionDraftBuilder =
  () => TCustomApplicationPermissionDraftBuilder;
