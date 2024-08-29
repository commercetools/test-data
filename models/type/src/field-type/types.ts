import type { FieldType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TFieldType = FieldType;

export type TFieldTypeGraphql = TFieldType & {
  __typename: 'FieldType';
};

export type TFieldTypeBuilder = TBuilder<TFieldType>;
export type TCreateFieldTypeBuilder = () => TFieldTypeBuilder;
