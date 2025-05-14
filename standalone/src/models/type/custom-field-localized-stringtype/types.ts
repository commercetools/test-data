import { CustomFieldLocalizedStringType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpLocalizedStringType } from '@/graphql-types';

export type TCustomFieldLocalizedStringType = CustomFieldLocalizedStringType;
export type TCustomFieldLocalizedStringTypeDraft =
  CustomFieldLocalizedStringType;

export type TCustomFieldLocalizedStringTypeGraphql = TCtpLocalizedStringType;
export type TCustomFieldLocalizedStringTypeDraftGraphql = {
  lstringtype: {
    dummy: string | null;
  };
};

export type TCustomFieldLocalizedStringTypeBuilder =
  TBuilder<TCustomFieldLocalizedStringType>;
export type TCustomFieldLocalizedStringTypeDraftBuilder =
  TBuilder<TCustomFieldLocalizedStringTypeDraft>;

export type TCreateCustomFieldLocalizedStringTypeBuilder =
  () => TCustomFieldLocalizedStringTypeBuilder;
export type TCreateCustomFieldLocalizedStringTypeDraftBuilder =
  () => TCustomFieldLocalizedStringTypeDraftBuilder;
