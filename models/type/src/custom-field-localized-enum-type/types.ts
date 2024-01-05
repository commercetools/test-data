import { CustomFieldLocalizedEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCustomFieldLocalizedEnumValueDraftGraphql,
  TCustomFieldLocalizedEnumValueGraphql,
} from '../custom-field-localized-enum-value';

export type TCustomFieldLocalizedEnumType = CustomFieldLocalizedEnumType;
export type TCustomFieldLocalizedEnumTypeDraft = CustomFieldLocalizedEnumType;

export type TCustomFieldLocalizedEnumTypeGraphql = Omit<
  TCustomFieldLocalizedEnumType,
  'values'
> & {
  values: {
    results: Array<TCustomFieldLocalizedEnumValueGraphql>;
    __typename: 'LocalizableEnumValueTypeResult';
  };
  __typename: 'LocalizableEnumCustomFieldType';
};

export type TCustomFieldLocalizedEnumTypeDraftGraphql = {
  lenum: {
    values: Array<TCustomFieldLocalizedEnumValueDraftGraphql>;
  };
};

export type TCustomFieldLocalizedEnumTypeBuilder =
  TBuilder<TCustomFieldLocalizedEnumType>;
export type TCustomFieldLocalizedEnumTypeDraftBuilder =
  TBuilder<TCustomFieldLocalizedEnumTypeDraft>;

export type TCreateCustomFieldLocalizedEnumTypeBuilder =
  () => TCustomFieldLocalizedEnumTypeBuilder;
export type TCreateCustomFieldLocalizedEnumTypeDraftBuilder =
  () => TCustomFieldLocalizedEnumTypeDraftBuilder;
