import { Product, ProductDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TCtpProduct,
  TCtpProductDraft,
} from '../../../graphql-types';

/**
 * @deprecated use `TProductRest` or `TProductGraphql` instead
 */
export type TProduct = Product;
/**
 * @deprecated use `TProductDraftRest` or `TProductDraftGraphql` instead
 */
export type TProductDraft = ProductDraft;

export type TProductRest = Product;
export type TProductDraftRest = ProductDraft;

export type TProductGraphql = TCtpProduct;
export type TProductDraftGraphql = TCtpProductDraft;

export type TCreateProductBuilder<
  TProductModel extends
    | TProductRest
    | TProductDraftRest
    | TProductGraphql
    | TProductDraftGraphql,
> = () => TBuilder<TProductModel>;
