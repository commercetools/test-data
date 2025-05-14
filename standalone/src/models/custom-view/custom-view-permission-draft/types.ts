import type { TBuilder } from '@/core';
import type { TMcSettingsCustomViewPermission as McSettingsCustomViewPermission } from '@/graphql-types';

export type TCustomViewPermissionDraft = Pick<
  McSettingsCustomViewPermission,
  'name' | 'oAuthScopes'
>;
export type TCustomViewPermissionDraftGraphql = McSettingsCustomViewPermission;

export type TCustomViewPermissionDraftBuilder =
  TBuilder<TCustomViewPermissionDraft>;
export type TCreateCustomViewPermissionDraftBuilder =
  () => TCustomViewPermissionDraftBuilder;
