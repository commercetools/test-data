import { DiscountGroup, DiscountGroupDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDiscountGroup, TCtpDiscountGroupDraft } from '@/graphql-types';

export type TDiscountGroupRest = DiscountGroup;
export type TDiscountGroupDraftRest = DiscountGroupDraft;
export type TDiscountGroupGraphql = TCtpDiscountGroup;
export type TDiscountGroupDraftGraphql = TCtpDiscountGroupDraft;

export type TCreateDiscountGroupBuilder<
  TModel extends
    | TDiscountGroupRest
    | TDiscountGroupGraphql
    | TDiscountGroupDraftRest
    | TDiscountGroupDraftGraphql,
> = () => TBuilder<TModel>;
