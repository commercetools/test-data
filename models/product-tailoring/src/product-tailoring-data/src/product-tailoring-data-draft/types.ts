import { ProductTailoringDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpProductTailoringDraft } from '@commercetools-test-data/graphql-types';

export type TProductTailoringDataDraftRest = ProductTailoringDraft;
export type TProductTailoringDataDraftGraphql = TCtpProductTailoringDraft;

export type TCreateProductTailoringDataDraftBuilder<
  TModel extends
    | TProductTailoringDataDraftRest
    | TProductTailoringDataDraftGraphql,
> = () => TBuilder<TModel>;
