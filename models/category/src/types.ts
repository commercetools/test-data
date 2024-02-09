import type { Category, CategoryDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

//CategoryDraft
export type TCategoryDraft = CategoryDraft;
export type TCategoryDraftBuilder = TBuilder<TCategoryDraft>;
export type TCreateCategoryDraftBuilder = () => TCategoryDraftBuilder;
export type TCategoryDraftGraphql = Omit<
  TCategory,
  | 'name'
  | 'description'
  | 'slug'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
> & {
  name: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql | null;
  slug: TLocalizedStringDraftGraphql;
  metaTitle?: TLocalizedStringDraftGraphql | null;
  metaDescription?: TLocalizedStringDraftGraphql | null;
  metaKeywords?: TLocalizedStringDraftGraphql | null;
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
