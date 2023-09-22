import { AttributeSetType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeSetType = AttributeSetType;
export type TAttributeSetTypeDraft = Omit<AttributeSetType, 'name'>;

export type TAttributeSetTypeGraphql = TAttributeSetType & {
  __typename: 'SetAttributeDefinitionType';
};
export type TAttributeSetTypeDraftGraphql = TAttributeSetTypeDraft;

export type TAttributeSetTypeBuilder = TBuilder<TAttributeSetType>;
export type TAttributeSetTypeDraftBuilder = TBuilder<TAttributeSetTypeDraft>;

export type TCreateAttributeSetTypeBuilder = () => TAttributeSetTypeBuilder;
export type TCreateAttributeSetTypeDraftBuilder =
  () => TAttributeSetTypeDraftBuilder;
