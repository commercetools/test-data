import {
  DirectDiscount,
  DirectDiscountDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDirectDiscount, TCtpDirectDiscountDraft } from '@/graphql-types';

export type TDirectDiscountRest = DirectDiscount;
export type TDirectDiscountDraftRest = DirectDiscountDraft;
export type TDirectDiscountGraphql = TCtpDirectDiscount;
export type TDirectDiscountDraftGraphql = TCtpDirectDiscountDraft;

export type TCreateDirectDiscountBuilder<
  TModel extends
    | TDirectDiscountRest
    | TDirectDiscountGraphql
    | TDirectDiscountDraftRest
    | TDirectDiscountDraftGraphql,
> = () => TBuilder<TModel>;
