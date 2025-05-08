import type { AttributeTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAttributeTimeType = AttributeTimeType;
export type TAttributeTimeTypeDraft = AttributeTimeType;

export type TAttributeTimeTypeGraphql = AttributeTimeType & {
  __typename: 'TimeAttributeDefinitionType';
};
export type TAttributeTimeTypeDraftGraphql = {
  time: {
    dummy: string | null;
  };
};

export type TAttributeTimeTypeBuilder = TBuilder<TAttributeTimeType>;
export type TAttributeTimeTypeDraftBuilder = TBuilder<TAttributeTimeTypeDraft>;

export type TCreateAttributeTimeTypeBuilder = () => TAttributeTimeTypeBuilder;
export type TCreateAttributeTimeTypeDraftBuilder =
  () => TAttributeTimeTypeDraftBuilder;
