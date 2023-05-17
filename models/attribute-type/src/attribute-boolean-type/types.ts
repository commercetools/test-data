import type { AttributeBooleanType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeBooleanType = AttributeBooleanType;
export type TAttributeBooleanTypeDraft = AttributeBooleanType;

export type TAttributeBooleanTypeGraphql = AttributeBooleanType & {
  __typename: 'BooleanAttributeDefinitionType';
};
export type TAttributeBooleanTypeDraftGraphql = {
  boolean: {
    dummy: string | null;
  };
};

export type TAttributeBooleanTypeBuilder = TBuilder<TAttributeBooleanType>;
export type TAttributeBooleanTypeDraftBuilder =
  TBuilder<TAttributeBooleanTypeDraft>;

export type TCreateAttributeBooleanTypeBuilder =
  () => TAttributeBooleanTypeBuilder;
export type TCreateAttributeBooleanTypeDraftBuilder =
  () => TAttributeBooleanTypeDraftBuilder;
