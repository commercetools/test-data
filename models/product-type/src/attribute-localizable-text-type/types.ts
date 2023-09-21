import { AttributeLocalizableTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeLocalizableTextType = AttributeLocalizableTextType;

export type TAttributeLocalizableTextTypeGraphql =
  TAttributeLocalizableTextType & {
    __typename: 'AttributeLocalizableTextType';
  };

export type TAttributeLocalizableTextTypeBuilder =
  TBuilder<TAttributeLocalizableTextType>;

export type TCreateAttributeLocalizableTextTypeBuilder =
  () => TAttributeLocalizableTextTypeBuilder;
