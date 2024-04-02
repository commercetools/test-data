import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermission as McSettingsCustomApplicationPermission } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationPermissionDraft = Pick<
  McSettingsCustomApplicationPermission,
  'name' | 'oAuthScopes'
>;
export type TCustomApplicationPermissionDraftGraphql =
  McSettingsCustomApplicationPermission;

export type TCustomApplicationPermissionDraftBuilder =
  TBuilder<TCustomApplicationPermissionDraft>;
export type TCreateCustomApplicationPermissionDraftBuilder =
  () => TCustomApplicationPermissionDraftBuilder;
