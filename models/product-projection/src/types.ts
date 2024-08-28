import type {
  ProductProjection,
  ReviewRatingStatistics,
  SuggestTokenizer,
} from '@commercetools/platform-sdk';
import type { TCategoryGraphql } from '@commercetools-test-data/category';
import type {
  TLocalizedStringGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TProductTypeGraphql } from '@commercetools-test-data/product-type';
import type { TStateGraphql } from '@commercetools-test-data/state';
import type { TTaxCategoryGraphql } from '@commercetools-test-data/tax-category';

export type TProductProjection = ProductProjection;

export type TProductProjectionRest = TProductProjection;

export type TCategoryOrderHintGraphql = {
  categoryId: string;
  orderHint: string;
  __typename: 'CategoryOrderHint';
};

export type TSearchKeyword = {
  text: string;
  suggestTokenizer?: SuggestTokenizer;
};

export type TSearchKeywords = {
  locale: string;
  searchKeywords: TSearchKeyword[];
};

export type TProductProjectionGraphql = Omit<
  TProductProjection,
  | 'categories'
  | 'categoryOrderHints'
  | 'description'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
  | 'name'
  | 'productType'
  | 'searchKeywords'
  | 'slug'
  | 'state'
  | 'taxCategory'
> & {
  categoryOrderHints: TCategoryOrderHintGraphql[];
  categories: TCategoryGraphql[];
  categoriesRef: TReferenceGraphql[];
  description?: string;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  name: string;
  nameAllLocales: TLocalizedStringGraphql;
  metaDescription?: string;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
  metaKeywords?: string;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaTitle?: string;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  productType: TProductTypeGraphql;
  productTypeRef: TReferenceGraphql;
  reviewRatingStatistics?: ReviewRatingStatistics & {
    __typename: 'ReviewRatingStatistics';
  };
  searchKeywords: TSearchKeywords[];
  slug: string;
  slugAllLocales: TLocalizedStringGraphql;
  state?: TStateGraphql | null;
  stateRef?: TReferenceGraphql | null;
  taxCategory?: TTaxCategoryGraphql | null;
  taxCategoryRef?: TReferenceGraphql | null;
};

export type TProductProjectionBuilder = TBuilder<TProductProjection>;
export type TCreateProductProjectionBuilder = () => TProductProjectionBuilder;
