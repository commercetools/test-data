import type { CustomFieldEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldEnumValue = CustomFieldEnumValue;
export type TCustomFieldEnumValueDraft = CustomFieldEnumValue;

export type TCustomFieldEnumValueGraphql = TCustomFieldEnumValue & {
  __typename: 'EnumValue';
};
export type TCustomFieldEnumValueDraftGraphql = TCustomFieldEnumValueDraft;

export type TCustomFieldEnumValueBuilder = TBuilder<TCustomFieldEnumValue>;
export type TCustomFieldEnumValueDraftBuilder =
  TBuilder<TCustomFieldEnumValueDraft>;

export type TCreateCustomFieldEnumValueBuilder =
  () => TCustomFieldEnumValueBuilder;
export type TCreateCustomFieldEnumValueDraftBuilder =
  () => TCustomFieldEnumValueDraftBuilder;
