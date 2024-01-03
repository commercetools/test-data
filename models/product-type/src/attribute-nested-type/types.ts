import { AttributeNestedType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeNestedType = AttributeNestedType;

export type TAttributeNestedTypeGraphql = TAttributeNestedType & {
  __typename: 'NestedAttributeDefinitionType';
};

export type TAttributeNestedTypeBuilder = TBuilder<TAttributeNestedType>;
export type TCreateAttributeNestedTypeBuilder =
  () => TAttributeNestedTypeBuilder;
