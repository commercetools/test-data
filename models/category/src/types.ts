import type { Category } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';

export type TCategory = Category;
export type TCategoryBuilder = TBuilder<TCategory>;
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryGraphql = Omit<
  TCategory,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'name'
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'description'
  // In GraphQL, the object shape is different.
  | 'createdBy'
  // In GraphQL, the object shape is different.
  | 'lastModifiedBy'
> & {
  __typename: 'Category';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql;
  descriptionAllLocales?: TLocalizedStringGraphql;
};
