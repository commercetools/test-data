import {
  ProductTailoring,
  ProductTailoringDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpProductTailoring,
  TCtpProductTailoringDraft,
} from '@/graphql-types';

export type TProductTailoringRest = ProductTailoring;
export type TProductTailoringDraftRest = ProductTailoringDraft;
export type TProductTailoringGraphql = TCtpProductTailoring;
export type TProductTailoringDraftGraphql = TCtpProductTailoringDraft;

export type TCreateProductTailoringBuilder<
  TModel extends
    | TProductTailoringRest
    | TProductTailoringGraphql
    | TProductTailoringDraftRest
    | TProductTailoringDraftGraphql,
> = () => TBuilder<TModel>;
