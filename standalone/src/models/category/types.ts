import type {
  Asset,
  Category,
  CategoryDraft,
  CustomFields,
  Reference,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@/models/commons';

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
  description?: string | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  slug: string;
  slugAllLocales?: TLocalizedStringGraphql | null;
  metaTitle?: string | null;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  metaKeywords?: string | null;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaDescription?: string | null;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
};

// CategorySearch
export type TCategorySearch = {
  id: string;
  key: string;
  version: number;
  name?: string | null;
  description?: string | null;
  slug?: String | null;
  ancestorsRef: Reference[];
  ancestors: TCategorySearch[];
  parentRef: Reference;
  parent: TCategorySearch;
  externalId: String;
  stagedProductCount: number;
  childCount: number;
  productTypeNames: String[] | null;
  children: TCategorySearch[] | null;
  createdAt: string;
  lastModifiedAt: string;
  orderHint: string;
  assets: Asset[];
  custom: CustomFields[];
};
export type TCategorySearchBuilder = TBuilder<TCategorySearch>;
export type TCreateCategorySearchBuilder = () => TCategorySearchBuilder;
export type TCategorySearchGraphql = TCategorySearch & {
  nameAllLocales: TLocalizedStringGraphql | null;
  descriptionAllLocales: TLocalizedStringGraphql | null;
  slugAllLocales: TLocalizedStringGraphql | null;
  __typename: 'CategorySearch';
};
