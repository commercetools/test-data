import type { AttributeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeType = AttributeType;

export type TAttributeTypeGraphql = TAttributeType & {
  __typename: TAttributeType['name'];
};

export type TAttributeTypeBuilder = TBuilder<TAttributeType>;

export type TCreateAttributeTypeBuilder = () => TAttributeTypeBuilder;
