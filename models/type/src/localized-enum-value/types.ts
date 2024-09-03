import { TLocalizedFieldGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedEnumValue = {
  key: string;
  label: string;
};

export type TLocalizedEnumValueGraphql = TLocalizedEnumValue & {
  labelAllLocales: TLocalizedFieldGraphql[];
  __typename: 'LocalizedEnumValue';
};

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
