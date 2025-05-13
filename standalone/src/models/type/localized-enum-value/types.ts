import type { TBuilder } from '@/core';
import { TCtpLocalizedEnumValue } from '@/graphql-types';

export type TLocalizedEnumValue = {
  key: string;
  label: string;
};

export type TLocalizedEnumValueGraphql = TCtpLocalizedEnumValue;

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
