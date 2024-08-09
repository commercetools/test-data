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
  // The shape of these props is different in GraphQL
  | 'name'
  | 'description'
  | 'slug'
  | 'createdBy'
  | 'lastModifiedBy'
  | 'metaTitle'
  | 'metaKeywords'
  | 'metaDescription'
> & {
  __typename: 'Category';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  name: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  slug: string;
  slugAllLocales?: TLocalizedStringGraphql | null;
  metaTitle?: string;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  metaKeywords?: string;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaDescription?: string;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
};
