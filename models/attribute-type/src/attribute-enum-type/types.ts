import type {
  AttributeEnumType,
  AttributePlainEnumValue,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeEnumType = AttributeEnumType;
export type TAttributeEnumTypeDraft = AttributeEnumType;

export type TAttributeEnumTypeGraphql = AttributeEnumType & {
  __typename: 'AttributeEnumDefinitionType';
};
export type TAttributeEnumTypeDraftGraphql = {
  enum: { values: Array<AttributePlainEnumValue> };
};

export type TAttributeEnumTypeBuilder = TBuilder<TAttributeEnumType>;
export type TAttributeEnumTypeDraftBuilder = TBuilder<TAttributeEnumTypeDraft>;

export type TCreateAttributeEnumTypeBuilder = () => TAttributeEnumTypeBuilder;
export type TCreateAttributeEnumTypeDraftBuilder =
  () => TAttributeEnumTypeDraftBuilder;
