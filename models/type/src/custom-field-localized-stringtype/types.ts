import { CustomFieldLocalizedStringType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldLocalizedStringType = CustomFieldLocalizedStringType;
export type TCustomFieldLocalizedStringTypeDraft =
  CustomFieldLocalizedStringType;

export type TCustomFieldLocalizedStringTypeGraphql =
  TCustomFieldLocalizedStringType & {
    __typename: 'LocalizableStringtypeCustomFieldType';
  };

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
