import type { TBuilder } from '@commercetools-test-data/core';

export type TPlainEnumValue = {
  key: string;
  label: string | undefined;
};

export type TPlainEnumValueGraphql = TPlainEnumValue & {
  __typename: 'PlainEnumValue';
};

export type TPlainEnumValueBuilder = TBuilder<TPlainEnumValue>;
export type TCreatePlainEnumValueBuilder = () => TPlainEnumValueBuilder;
