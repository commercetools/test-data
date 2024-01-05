import { CustomFieldEnumValue } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons/src';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldEnumValue = CustomFieldEnumValue;
export type TCustomFieldEnumValueDraft = CustomFieldEnumValue;

export type TCustomFieldEnumValueGraphql = Omit<
  TCustomFieldEnumValue,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  'label'
> & {
  labelAllLocales: TLocalizedStringGraphql | null;
  __typename: 'LocalizableEnumValueType';
};
export type TCustomFieldEnumValueDraftGraphql = TCustomFieldEnumValueDraft;

export type TCustomFieldEnumValueBuilder = TBuilder<TCustomFieldEnumValue>;
export type TCustomFieldEnumValueDraftBuilder =
  TBuilder<TCustomFieldEnumValueDraft>;

export type TCreateCustomFieldEnumValueBuilder =
  () => TCustomFieldEnumValueBuilder;
export type TCreateCustomFieldEnumValueDraftBuilder =
  () => TCustomFieldEnumValueDraftBuilder;
