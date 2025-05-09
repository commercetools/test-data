import type { TBuilder } from '../../../core';

export type TLocalizedField = {
  locale: string;
  value: string;
};
export type TLocalizedFieldGraphql = TLocalizedField & {
  __typename: 'LocalizedField';
};

export type TLocalizedFieldBuilder = TBuilder<TLocalizedField>;
export type TCreateLocalizedFieldBuilder = () => TLocalizedFieldBuilder;
