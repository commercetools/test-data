import { ProductTailoringDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductTailoringDraft } from '@/graphql-types';

export type TProductTailoringDataDraftRest = ProductTailoringDraft;
export type TProductTailoringDataDraftGraphql = TCtpProductTailoringDraft;

export type TCreateProductTailoringDataDraftBuilder<
  TModel extends
    | TProductTailoringDataDraftRest
    | TProductTailoringDataDraftGraphql,
> = () => TBuilder<TModel>;
