import type { AttributeReferenceType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeReferenceType = AttributeReferenceType;
export type TAttributeReferenceTypeDraft = Omit<AttributeReferenceType, 'name'>;

export type TAttributeReferenceTypeGraphql = AttributeReferenceType & {
  __typename: 'ReferenceAttributeDefinitionType';
};
export type TAttributeReferenceTypeDraftGraphql = TAttributeReferenceTypeDraft;

export type TAttributeReferenceTypeBuilder = TBuilder<TAttributeReferenceType>;
export type TAttributeReferenceTypeDraftBuilder =
  TBuilder<TAttributeReferenceTypeDraft>;

export type TCreateAttributeReferenceTypeBuilder =
  () => TAttributeReferenceTypeBuilder;
export type TCreateAttributeReferenceTypeDraftBuilder =
  () => TAttributeReferenceTypeDraftBuilder;
