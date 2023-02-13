import { ProductType, ProductTypeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductType = ProductType;

export type TProductTypeDraft = ProductTypeDraft;

export type TProductTypeGraphql = TProductType & {
  __typename: 'ProductType';
};

export type TProductTypeDraftGraphql = TProductTypeDraft & {
  __typename: 'ProductTypeDraft';
};

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraft>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
