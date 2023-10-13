import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedField = {
  locale: string;
  value: string;
};

export type TLocalizedFieldBuilder = TBuilder<TLocalizedField>;
export type TCreateLocalizedFieldBuilder = () => TLocalizedFieldBuilder;
