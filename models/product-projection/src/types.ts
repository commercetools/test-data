import {
  ProductProjection,
  ReviewRatingStatistics,
  SuggestTokenizer,
} from '@commercetools/platform-sdk';
import {
  TLocalizedStringGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TState } from '@commercetools-test-data/state';
import { TTaxCategory } from '@commercetools-test-data/tax-category';

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
  | 'categoryOrderHints'
  | 'description'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
  | 'name'
  | 'searchKeywords'
  | 'slug'
  | 'state'
  | 'taxCategory'
> & {
  categoryOrderHints: TCategoryOrderHintGraphql[];
  categoriesRef: TReferenceGraphql[];
  description?: string | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  name: string;
  nameAllLocales: TLocalizedStringGraphql;
  metaDescription?: string | null;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
  metaKeywords?: string | null;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaTitle?: string | null;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  productTypeRef: TReferenceGraphql;
  reviewRatingStatistics?: ReviewRatingStatistics & {
    __typename: 'ReviewRatingStatistics';
  };
  searchKeywords: TSearchKeywords[];
  slug: string;
  slugAllLocales: TLocalizedStringGraphql;
  state?: TState;
  stateRef?: TReferenceGraphql;
  taxCategory?: TTaxCategory | null;
  taxCategoryRef?: TReferenceGraphql | null;
};

export type TProductProjectionBuilder = TBuilder<TProductProjection>;
export type TCreateProductProjectionBuilder = () => TProductProjectionBuilder;
