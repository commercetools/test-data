import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpLocalizedEnumValue } from '@commercetools-test-data/graphql-types';

export type TLocalizedEnumValue = {
  key: string;
  label: string;
};

export type TLocalizedEnumValueGraphql = TCtpLocalizedEnumValue;

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
