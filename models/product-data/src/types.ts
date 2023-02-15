import {
  CategoryReference,
  ProductData,
  ProductVariant,
  SearchKeyword,
  CategoryOrderHints,
} from '@commercetools/platform-sdk';
import { TCategoryGraphql } from '@commercetools-test-data/category';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { ValueOf } from '@commercetools-test-data/core/src/@jackfranklin/test-data-bot';

export type TProductData = ProductData;

// This type only appears in the GraphQL representation
export type TCategoryOrderHintGraphql = {
  categoryId: keyof CategoryOrderHints;
  orderHint: ValueOf<CategoryOrderHints>;
  __typename: 'CategoryOrderHint';
};

export type TProductDataGraphql = Omit<
  TProductData,
  'categories' | 'categoryOrderHints'
> & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  slugAllLocales?: TLocalizedStringGraphql | null;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
  categoryOrderHint?: String | null;
  categoryOrderHints: Array<TCategoryOrderHintGraphql>;
  categoriesRef: Array<CategoryReference>;
  categories: Array<TCategoryGraphql>;
  searchKeyword?: Array<SearchKeyword> | null;
  allVariants: Array<ProductVariant>;
  variant?: ProductVariant | null;
  __typename: 'ProductData';
};

export type TProductDataBuilder = TBuilder<TProductData>;
export type TCreateProductDataBuilder = () => TProductDataBuilder;
