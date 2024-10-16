import {
  ProductProjection,
  ReviewRatingStatistics,
  SuggestTokenizer,
} from '@commercetools/platform-sdk';
import {
  TLocalizedStringDraftGraphql,
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
  description?: string;
  descriptionAllLocales?: TLocalizedStringDraftGraphql | null;
  name: string;
  nameAllLocales: TLocalizedStringDraftGraphql;
  metaDescription?: string;
  metaDescriptionAllLocales?: TLocalizedStringDraftGraphql | null;
  metaKeywords?: string;
  metaKeywordsAllLocales?: TLocalizedStringDraftGraphql | null;
  metaTitle?: string;
  metaTitleAllLocales?: TLocalizedStringDraftGraphql | null;
  productTypeRef: TReferenceGraphql;
  reviewRatingStatistics?: ReviewRatingStatistics & {
    __typename: 'ReviewRatingStatistics';
  };
  searchKeywords: TSearchKeywords[];
  slug: string;
  slugAllLocales: TLocalizedStringDraftGraphql;
  state?: TState;
  stateRef?: TReferenceGraphql;
  taxCategory?: TTaxCategory | null;
  taxCategoryRef?: TReferenceGraphql | null;
};

export type TProductProjectionBuilder = TBuilder<TProductProjection>;
export type TCreateProductProjectionBuilder = () => TProductProjectionBuilder;
