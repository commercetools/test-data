import {
  RecurringOrder,
  RecurringOrderDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpRecurringOrder, TCtpRecurringOrderDraft } from '@/graphql-types';

export type TRecurringOrderRest = RecurringOrder;
export type TRecurringOrderDraftRest = RecurringOrderDraft;

export type TRecurringOrderGraphql = TCtpRecurringOrder;
export type TRecurringOrderDraftGraphql = TCtpRecurringOrderDraft;

export type TCreateRecurringOrderBuilder<
  TRecurringOrderModel extends
    | TRecurringOrderGraphql
    | TRecurringOrderDraftGraphql
    | TRecurringOrderRest
    | TRecurringOrderDraftRest,
> = () => TBuilder<TRecurringOrderModel>;
