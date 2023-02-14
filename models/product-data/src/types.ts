import {
  CategoryReference,
  ProductData,
  ProductVariant,
  SearchKeyword,
} from '@commercetools/platform-sdk';
import { TCategoryGraphql } from '@commercetools-test-data/category';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductData = ProductData;

export type TProductDataGraphql = Omit<TProductData, 'categories'> & {
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  slugAllLocales?: TLocalizedStringGraphql | null;
  metaTitleAllLocales?: TLocalizedStringGraphql | null;
  metaKeywordsAllLocales?: TLocalizedStringGraphql | null;
  metaDescriptionAllLocales?: TLocalizedStringGraphql | null;
  categoryOrderHint?: String | null;
  categoriesRef: Array<CategoryReference>;
  categories: Array<TCategoryGraphql>;
  searchKeyword?: Array<SearchKeyword> | null;
  allVariants: Array<ProductVariant>;
  variant?: ProductVariant | null;
  __typename: 'ProductData';
};

export type TProductDataBuilder = TBuilder<TProductData>;
export type TCreateProductDataBuilder = () => TProductDataBuilder;
