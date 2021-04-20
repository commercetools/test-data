import type { TBuilder } from '@commercetools-test-data/core';

export type TCategoryBuilder = TBuilder<TCategory>;

export type TCategory = {
  id: string;
  version?: number;
  [key: string]: unknown;
};
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryRest = TCategory;
export type TCategoryGraphql = TCategory & {
  __typename: 'Category';
};
