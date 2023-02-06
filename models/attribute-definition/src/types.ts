import type { TBuilder } from '@commercetools-test-data/core';
import { AttributeDefinition } from '@commercetools/platform-sdk';

export type TAttributeDefinition = AttributeDefinition;

export type TAttributeDefinitionGraphql = TAttributeDefinition & {
  __typename: TAttributeDefinition['name'];
};

export type TAttributeDefinitionBuilder = TBuilder<TAttributeDefinition>;
export type TCreateAttributeDefinitionBuilder =
  () => TAttributeDefinitionBuilder;
