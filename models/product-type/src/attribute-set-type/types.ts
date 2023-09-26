import { AttributeSetType, AttributeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeSetType = AttributeSetType;
export type TAttributeSetTypeDraft = AttributeSetType;

export type TAttributeSetTypeGraphql = TAttributeSetType & {
  __typename: 'SetAttributeDefinitionType';
};

export type TAttributeSetTypeDraftGraphql = {
  set: {
    elementType: TAttributeSetTypeGraphql['elementType'];
  };
};

export type TAttributeSetTypeBuilder = TBuilder<TAttributeSetType>;
export type TAttributeSetTypeDraftBuilder = TBuilder<TAttributeSetTypeDraft>;

export type TCreateAttributeSetTypeBuilder = () => TAttributeSetTypeBuilder;
export type TCreateAttributeSetTypeDraftBuilder =
  () => TAttributeSetTypeDraftBuilder;
