import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpLocalizedEnumValue } from '../../../../graphql-types/src';

export type TLocalizedEnumValue = {
  key: string;
  label: string;
};

export type TLocalizedEnumValueGraphql = TCtpLocalizedEnumValue;

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
