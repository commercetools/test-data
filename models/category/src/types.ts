import type {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { Category, CategoryDraft } from '@commercetools/platform-sdk';

//CategoryDraft
export type TCategoryDraft = CategoryDraft;
export type TCategoryDraftBuilder = TBuilder<TCategoryDraft>;
export type TCreateCategoryDraftBuilder = () => TCategoryDraftBuilder;
export type TCategoryDraftGraphql = Omit<
  TCategory,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'name'
  // In GraphQL, we prefer to use `descriptionAllLocales` instead of `description`.
  | 'description'
> & {
  __typename: 'CategoryDraft';
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};

//Category
export type TCategory = Category;
export type TCategoryBuilder = TBuilder<TCategory>;
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryGraphql = Omit<
  TCategory,
  // In GraphQL, we prefer to use `nameAllLocales` instead of `name`.
  | 'name'
  // In GraphQL, we prefer to use `descriptionAllLocales` instead of `description`.
  | 'description'
  // In GraphQL, the object shape is different.
  | 'createdBy'
  // In GraphQL, the object shape is different.
  | 'lastModifiedBy'
> & {
  __typename: 'Category';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
