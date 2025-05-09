import type { AttributeNumberType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAttributeNumberType = AttributeNumberType;
export type TAttributeNumberTypeDraft = AttributeNumberType;

export type TAttributeNumberTypeGraphql = AttributeNumberType & {
  __typename: 'NumberAttributeDefinitionType';
};
export type TAttributeNumberTypeDraftGraphql = {
  number: {
    dummy: string | null;
  };
};

export type TAttributeNumberTypeBuilder = TBuilder<TAttributeNumberType>;
export type TAttributeNumberTypeDraftBuilder =
  TBuilder<TAttributeNumberTypeDraft>;

export type TCreateAttributeNumberTypeBuilder =
  () => TAttributeNumberTypeBuilder;
export type TCreateAttributeNumberTypeDraftBuilder =
  () => TAttributeNumberTypeDraftBuilder;
