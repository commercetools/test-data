import type { TBuilder } from '@commercetools-test-data/core';
import type { AttributeType } from '@commercetools/platform-sdk';

export type TAttributeType = AttributeType;

export type TAttributeTypeGraphql = TAttributeType & {
  __typename: TAttributeType['name'];
};

export type TAttributeTypeBuilder = TBuilder<TAttributeType>;

export type TCreateAttributeTypeBuilder = () => TAttributeTypeBuilder;
