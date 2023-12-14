import { CustomFieldLocalizedEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldLocalizedEnumValue = CustomFieldLocalizedEnumValue;
export type TCustomFieldLocalizedEnumValueDraft = CustomFieldLocalizedEnumValue;

export type TCustomFieldLocalizedEnumValueGraphql = Omit<
  TCustomFieldLocalizedEnumValue,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  'label'
> & {
  labelAllLocales;
  __typename: 'LocalizableEnumValueType';
};
export type TCustomFieldLocalizedEnumValueDraftGraphql =
  TCustomFieldLocalizedEnumValueDraft;

export type TCustomFieldLocalizedEnumValueBuilder =
  TBuilder<TCustomFieldLocalizedEnumValue>;
export type TCustomFieldLocalizedEnumValueDraftBuilder =
  TBuilder<TCustomFieldLocalizedEnumValueDraft>;

export type TCreateCustomFieldLocalizedEnumValueBuilder =
  () => TCustomFieldLocalizedEnumValueBuilder;
export type TCreateCustomFieldLocalizedEnumValueDraftBuilder =
  () => TCustomFieldLocalizedEnumValueDraftBuilder;
