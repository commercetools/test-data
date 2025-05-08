import type { TBuilder } from '../../../../core';
import type { TMcSettingsCustomApplicationPermissionDataInput } from '../../../../graphql-types';

export type TCustomApplicationPermissionDraft =
  TMcSettingsCustomApplicationPermissionDataInput;

export type TCustomApplicationPermissionDraftBuilder =
  TBuilder<TCustomApplicationPermissionDraft>;
export type TCreateCustomApplicationPermissionDraftBuilder =
  () => TCustomApplicationPermissionDraftBuilder;
