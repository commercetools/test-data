import type { TBuilder } from '@/core';
import { TCtpRecurringOrder, TCtpRecurringOrderDraft } from '@/graphql-types';

export type TRecurringOrderGraphql = TCtpRecurringOrder;
export type TRecurringOrderDraftGraphql = TCtpRecurringOrderDraft;

export type TCreateRecurringOrderBuilder<
  TModel extends TRecurringOrderGraphql | TRecurringOrderDraftGraphql,
> = () => TBuilder<TModel>;
