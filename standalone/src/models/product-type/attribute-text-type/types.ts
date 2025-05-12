import type { AttributeTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAttributeTextType = AttributeTextType;
export type TAttributeTextTypeDraft = AttributeTextType;

export type TAttributeTextTypeGraphql = AttributeTextType & {
  __typename: 'TextAttributeDefinitionType';
};
export type TAttributeTextTypeDraftGraphql = {
  text: {
    dummy: string | null;
  };
};

export type TAttributeTextTypeBuilder = TBuilder<TAttributeTextType>;
export type TAttributeTextTypeDraftBuilder = TBuilder<TAttributeTextTypeDraft>;

export type TCreateAttributeTextTypeBuilder = () => TAttributeTextTypeBuilder;
export type TCreateAttributeTextTypeDraftBuilder =
  () => TAttributeTextTypeDraftBuilder;
