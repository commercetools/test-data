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
  'name' | 'description' | 'createdBy' | 'lastModifiedBy'
> & {
  __typename: 'Category';
  // name?: string;
  // description?: string;
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql;
  descriptionAllLocales?: TLocalizedStringGraphql;
};
