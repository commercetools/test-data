import { Product, ProductDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpProduct,
  TCtpProductDraft,
} from '@commercetools-test-data/graphql-types';

export type TProduct = Product & {
  skus: Array<String>;
};

export type TProductRest = Omit<TProduct, 'skus'>;

export type TProductGraphql = TCtpProduct;

export type TProductDraft = ProductDraft;
export type TProductDraftGraphql = TCtpProductDraft;

export type TProductBuilder = TBuilder<TProduct>;
export type TCreateProductBuilder = () => TProductBuilder;

export type TProductDraftBuilder = TBuilder<TProductDraft>;
export type TCreateProductDraftBuilder = () => TProductDraftBuilder;

export type TProductBuilderGraphql = TBuilder<TProductGraphql>;
export type TCreateProductBuilderGraphql = () => TProductBuilderGraphql;
