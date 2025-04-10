import type {
  CustomFieldEnumType,
  CustomFieldEnumValue,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpEnumType } from '@commercetools-test-data/graphql-types';

export type TCustomFieldEnumType = CustomFieldEnumType;
export type TCustomFieldEnumTypeDraft = CustomFieldEnumType;

export type TCustomFieldEnumTypeGraphql = TCtpEnumType;
export type TCustomFieldEnumTypeDraftGraphql = {
  enum: { values: Array<CustomFieldEnumValue> };
};

export type TCustomFieldEnumTypeBuilder = TBuilder<TCustomFieldEnumType>;
export type TCustomFieldEnumTypeDraftBuilder =
  TBuilder<TCustomFieldEnumTypeDraft>;

export type TCreateCustomFieldEnumTypeBuilder =
  () => TCustomFieldEnumTypeBuilder;
export type TCreateCustomFieldEnumTypeDraftBuilder =
  () => TCustomFieldEnumTypeDraftBuilder;
