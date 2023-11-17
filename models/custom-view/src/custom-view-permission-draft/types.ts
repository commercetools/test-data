import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomViewPermission as McSettingsCustomViewPermission } from '@commercetools-test-data/graphql-types';

export type TCustomViewPermissionDraft = Pick<
  McSettingsCustomViewPermission,
  'name' | 'oAuthScopes'
>;
export type TCustomViewPermissionDraftGraphql = McSettingsCustomViewPermission;

export type TCustomViewPermissionDraftBuilder =
  TBuilder<TCustomViewPermissionDraft>;
export type TCreateCustomViewPermissionDraftBuilder =
  () => TCustomViewPermissionDraftBuilder;
