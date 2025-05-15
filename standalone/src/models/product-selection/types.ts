import type {
  ProductSelection,
  ProductSelectionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpProductSelection,
  TCtpCreateProductSelectionDraft,
  TCtpProductOfSelection,
} from '@/graphql-types';

/**
 * @deprecated use `TProductSelectionDraftRest` or `TProductSelectionDraftGraphql` instead
 */
export type TProductSelectionDraft = ProductSelectionDraft;
/**
 * @deprecated use `TProductSelectionRest` or `TProductSelectionGraphql` instead
 */
export type TProductSelection = ProductSelection;

// REST types
export type TProductSelectionDraftRest = ProductSelectionDraft;
export type TProductSelectionRest = ProductSelection;

// GraphQL types
export type TProductSelectionDraftGraphql = TCtpCreateProductSelectionDraft;
export type TProductSelectionGraphql = TCtpProductSelection;
export type TProductOfSelectionGraphql = TCtpProductOfSelection;

// Builders types
export type TCreateProductSelectionBuilder<
  TProductSelectionModel extends
    | TProductSelectionRest
    | TProductSelectionGraphql
    | TProductSelectionDraftRest
    | TProductSelectionDraftGraphql
    | TProductOfSelectionGraphql,
> = () => TBuilder<TProductSelectionModel>;
