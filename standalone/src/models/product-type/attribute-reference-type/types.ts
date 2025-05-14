import type { AttributeReferenceType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TAttributeReferenceType = AttributeReferenceType;
export type TAttributeReferenceTypeDraft = AttributeReferenceType;

export type TAttributeReferenceTypeGraphql = AttributeReferenceType & {
  __typename: 'ReferenceAttributeDefinitionType';
};

export type TAttributeReferenceTypeDraftGraphql = {
  reference: {
    referenceTypeId: TAttributeReferenceTypeGraphql['referenceTypeId'];
  };
};

export type TAttributeReferenceTypeBuilder = TBuilder<TAttributeReferenceType>;
export type TAttributeReferenceTypeDraftBuilder =
  TBuilder<TAttributeReferenceTypeDraft>;

export type TCreateAttributeReferenceTypeBuilder =
  () => TAttributeReferenceTypeBuilder;
export type TCreateAttributeReferenceTypeDraftBuilder =
  () => TAttributeReferenceTypeDraftBuilder;
