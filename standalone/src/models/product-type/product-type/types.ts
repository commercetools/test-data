import { ProductType, ProductTypeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpProductTypeDefinition,
  TCtpProductTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TProductTypeRest` or `TProductTypeGraphql` instead
 */
export type TProductType = ProductType;
/**
 * @deprecated use `TProductTypeDraftRest` or `TProductTypeDraftGraphql` instead
 */
export type TProductTypeDraft = ProductTypeDraft;

// REST types
export type TProductTypeRest = ProductType;
export type TProductTypeDraftRest = ProductTypeDraft;

// GraphQL types
export type TProductTypeGraphql = TCtpProductTypeDefinition;
export type TProductTypeDraftGraphql = TCtpProductTypeDraft;

// Builders types
export type TCreateProductTypeBuilder<
  TProductTypeModel extends
    | TProductType
    | TProductTypeDraft
    | TProductTypeRest
    | TProductTypeDraftRest
    | TProductTypeGraphql
    | TProductTypeDraftGraphql,
> = () => TBuilder<TProductTypeModel>;
