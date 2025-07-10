import { DiscountGroupDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDiscountGroupDraft } from '@/graphql-types';

export type TDiscountGroupDraftRest = DiscountGroupDraft;
export type TDiscountGroupDraftGraphql = TCtpDiscountGroupDraft;

export type TCreateDiscountGroupDraftBuilder<
  TModel extends TDiscountGroupDraftRest | TDiscountGroupDraftGraphql,
> = () => TBuilder<TModel>;
