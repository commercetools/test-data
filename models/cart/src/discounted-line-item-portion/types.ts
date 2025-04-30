import {
  DiscountedLineItemPortion,
  DiscountedLineItemPortionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpDiscountedLineItemPortion,
  TCtpDiscountedLineItemPortionDraft,
} from '@commercetools-test-data/graphql-types';

export type TDiscountedLineItemPortionRest = DiscountedLineItemPortion;
export type TDiscountedLineItemPortionDraftRest =
  DiscountedLineItemPortionDraft;
export type TDiscountedLineItemPortionGraphql = TCtpDiscountedLineItemPortion;
export type TDiscountedLineItemPortionDraftGraphql =
  TCtpDiscountedLineItemPortionDraft;

export type TCreateDiscountedLineItemPortionBuilder<
  TModel extends
    | TDiscountedLineItemPortionRest
    | TDiscountedLineItemPortionGraphql
    | TDiscountedLineItemPortionDraftRest
    | TDiscountedLineItemPortionDraftGraphql,
> = () => TBuilder<TModel>;
