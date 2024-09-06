import type { TBuilder } from '@commercetools-test-data/core';

export type TEnumValue = {
  key: string;
  label: string;
};

export type TEnumValueGraphql = TEnumValue & {
  __typename: 'EnumValue';
};

export type TEnumValueBuilder = TBuilder<TEnumValue>;
export type TCreateEnumValueBuilder = () => TEnumValueBuilder;
