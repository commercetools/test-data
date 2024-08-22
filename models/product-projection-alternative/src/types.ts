import {
  ProductProjection,
  ReviewRatingStatistics,
  SuggestTokenizer,
} from '@commercetools/platform-sdk';
import { TCategoryGraphql } from '@commercetools-test-data/category';
import {
  TLocalizedStringGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { TProductTypeGraphql } from '@commercetools-test-data/product-type';
import { TStateGraphql } from '@commercetools-test-data/state';
import { TTaxCategoryGraphql } from '@commercetools-test-data/tax-category';
import type { TSpecializedBuilder } from './core';

export type TProductProjectionRest = ProductProjection;

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
  ProductProjection,
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

export type TCreateProductProjectionBuilder<TModel> =
  () => TSpecializedBuilder<TModel>;
