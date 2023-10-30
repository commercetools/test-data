import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomViewPermission as McSettingsCustomViewPermission } from '@commercetools-test-data/graphql-types';

export type TCustomViewPermission = Omit<
  McSettingsCustomViewPermission,
  '__typename'
>;
export type TCustomViewPermissionGraphql = McSettingsCustomViewPermission;

export type TCustomViewPermissionBuilder = TBuilder<TCustomViewPermission>;
export type TCreateCustomViewPermissionBuilder =
  () => TCustomViewPermissionBuilder;

export type TCustomViewPermissionDraftBuilder = TBuilder<TCustomViewPermission>;
export type TCreateCustomViewPermissionDraftBuilder =
  () => TCustomViewPermissionDraftBuilder;
