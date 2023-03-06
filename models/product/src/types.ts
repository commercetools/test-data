import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { Product, ProductDraft } from '@commercetools/platform-sdk';

export type TProduct = Product & {
  skus: Array<String>;
};

export type TProductGraphql = TProduct & {
  productTypeRef: TReferenceGraphql;
  stateRef: TReferenceGraphql;
  taxCategoryRef: TReferenceGraphql;
  // TODO: add productSelectionRefs
  __typename: 'Product';
};

export type TProductDraft = ProductDraft;
export type TProductDraftGraphql = TProductDraft & {
  __typename: 'ProductDraft';
};

export type TProductBuilder = TBuilder<TProduct>;
export type TCreateProductBuilder = () => TProductBuilder;

export type TProductDraftBuilder = TBuilder<TProductDraft>;
export type TCreateProductDraftBuilder = () => TProductDraftBuilder;

export type TProductBuilderGraphql = TBuilder<TProductGraphql>;
export type TCreateProductBuilderGraphql = () => TProductBuilderGraphql;
