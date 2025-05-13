import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermissionDataInput } from '@commercetools-test-data/graphql-types';

type TCustomApplicationPermission = Omit<
  TMcSettingsCustomApplicationPermissionDataInput,
  '__typename'
>;

export type TCustomApplicationPermissionDraft = TCustomApplicationPermission;

export type TCustomApplicationPermissionDraftBuilder =
  TBuilder<TCustomApplicationPermissionDraft>;
export type TCreateCustomApplicationPermissionDraftBuilder =
  () => TCustomApplicationPermissionDraftBuilder;
