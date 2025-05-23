import { AttributeLocalizedEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TLocalizedStringGraphql } from '@/models/commons';

export type TAttributeLocalizedEnumValue = AttributeLocalizedEnumValue;
export type TAttributeLocalizedEnumValueDraft = AttributeLocalizedEnumValue;

export type TAttributeLocalizedEnumValueGraphql = Omit<
  TAttributeLocalizedEnumValue,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  'label'
> & {
  labelAllLocales: TLocalizedStringGraphql | null;
  __typename: 'LocalizableEnumValueType';
};
export type TAttributeLocalizedEnumValueDraftGraphql =
  TAttributeLocalizedEnumValueDraft;

export type TAttributeLocalizedEnumValueBuilder =
  TBuilder<TAttributeLocalizedEnumValue>;
export type TAttributeLocalizedEnumValueDraftBuilder =
  TBuilder<TAttributeLocalizedEnumValueDraft>;

export type TCreateAttributeLocalizedEnumValueBuilder =
  () => TAttributeLocalizedEnumValueBuilder;
export type TCreateAttributeLocalizedEnumValueDraftBuilder =
  () => TAttributeLocalizedEnumValueDraftBuilder;
