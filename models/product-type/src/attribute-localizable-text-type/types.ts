import type { AttributeLocalizableTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeLocalizableTextType = AttributeLocalizableTextType;
export type TAttributeLocalizableTextTypeDraft = AttributeLocalizableTextType;

export type TAttributeLocalizableTextTypeGraphql =
  TAttributeLocalizableTextType & {
    __typename: 'LocalizableTextAttributeDefinitionType';
  };

export type TAttributeLocalizableTextTypeDraftGraphql = {
  ltext: {
    dummy: string | null;
  };
};

export type TAttributeLocalizableTextTypeBuilder =
  TBuilder<TAttributeLocalizableTextType>;
export type TAttributeLocalizableTextTypeDraftBuilder =
  TBuilder<TAttributeLocalizableTextTypeDraft>;

export type TCreateAttributeLocalizableTextTypeBuilder =
  () => TAttributeLocalizableTextTypeBuilder;
export type TCreateAttributeLocalizableTextTypeDraftBuilder =
  () => TAttributeLocalizableTextTypeDraftBuilder;
