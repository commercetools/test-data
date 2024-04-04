import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationPermissionDataInput } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationPermissionDraft =
  TMcSettingsCustomApplicationPermissionDataInput;

export type TCustomApplicationPermissionDraftBuilder =
  TBuilder<TCustomApplicationPermissionDraft>;
export type TCreateCustomApplicationPermissionDraftBuilder =
  () => TCustomApplicationPermissionDraftBuilder;
