import { CustomFieldLocalizedEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpLocalizedEnumType } from '@/graphql-types';
import { TCustomFieldLocalizedEnumValueDraftGraphql } from '../custom-field-localized-enum-value';

export type TCustomFieldLocalizedEnumType = CustomFieldLocalizedEnumType;
export type TCustomFieldLocalizedEnumTypeDraft = CustomFieldLocalizedEnumType;

export type TCustomFieldLocalizedEnumTypeGraphql = TCtpLocalizedEnumType;

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
