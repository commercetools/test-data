import type { AttributeDateTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TAttributeDateTimeType = AttributeDateTimeType;
export type TAttributeDateTimeTypeDraft = AttributeDateTimeType;

export type TAttributeDateTimeTypeGraphql = AttributeDateTimeType & {
  __typename: 'DateTimeAttributeDefinitionType';
};
export type TAttributeDateTimeTypeDraftGraphql = {
  datetime: {
    dummy: string | null;
  };
};

export type TAttributeDateTimeTypeBuilder = TBuilder<TAttributeDateTimeType>;
export type TAttributeDateTimeTypeDraftBuilder =
  TBuilder<TAttributeDateTimeTypeDraft>;

export type TCreateAttributeDateTimeTypeBuilder =
  () => TAttributeDateTimeTypeBuilder;
export type TCreateAttributeDateTimeTypeDraftBuilder =
  () => TAttributeDateTimeTypeDraftBuilder;
