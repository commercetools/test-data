import type { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedEnumValue = {
  key: string;
  label: string;
};

export type TLocalizedEnumValueGraphql = TLocalizedEnumValue & {
  labelAllLocales: TLocalizedStringGraphql;
  __typename: 'LocalizedEnumValue';
};

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
