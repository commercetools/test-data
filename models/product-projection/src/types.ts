import {
  ProductProjection,
  ReviewRatingStatistics,
  SuggestTokenizer,
} from '@commercetools/platform-sdk';
import { TCategory, TCategoryGraphql } from '@commercetools-test-data/category';
import {
  TLocalizedStringGraphql,
  TReferenceRest,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TProductType,
  TProductTypeGraphql,
} from '@commercetools-test-data/product-type';
import { TState, TStateGraphql } from '@commercetools-test-data/state';
import {
  TTaxCategory,
  TTaxCategoryGraphql,
} from '@commercetools-test-data/tax-category';

export type TProductProjection = ProductProjection;

export type TProductProjectionRest = Omit<
  TProductProjection,
  'productType' | 'categories' | 'taxCategory' | 'state'
> & {
  productType: TReferenceRest<TProductType>;
  categories: TReferenceRest<TCategory>[];
  taxCategory?: TReferenceRest<TTaxCategory>;
  state?: TReferenceRest<TState>;
};

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
