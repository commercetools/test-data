import type { TBuilder } from '@commercetools-test-data/core';
import { AttributePlainEnumValue } from '@commercetools/platform-sdk';

export type TPlainEnumValue = AttributePlainEnumValue;

export type TPlainEnumValueGraphql = TPlainEnumValue & {
  __typename: 'PlainEnumValue';
};

export type TPlainEnumValueBuilder = TBuilder<TPlainEnumValue>;
export type TCreatePlainEnumValueBuilder = () => TPlainEnumValueBuilder;
