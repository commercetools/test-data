import type { Category } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCategory = Category;
export type TCategoryBuilder = TBuilder<TCategory>;
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryGraphql = TCategory & {
  __typename: 'Category';
};
