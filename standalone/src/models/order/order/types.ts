import {
  Order,
  OrderFromCartDraft,
  OrderFromQuoteDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpOrder,
  TCtpOrderCartCommand,
  TCtpOrderQuoteCommand,
} from '@/graphql-types';

/**
 * @deprecated use `TOrderRest` instead
 */
export type TOrder = TCtpOrder;
export type TOrderRest = Order;
export type TOrderGraphql = TCtpOrder;

/**
 * @deprecated use `TOrderFromCartDraftRest` instead
 */
export type TOrderFromCartDraft = OrderFromCartDraft;
export type TOrderFromCartDraftRest = OrderFromCartDraft;
export type TOrderFromCartDraftGraphql = TCtpOrderCartCommand;

/**
 * @deprecated use `TOrderFromQuoteDraftRest` instead
 */
export type TOrderFromQuoteDraft = OrderFromQuoteDraft;
export type TOrderFromQuoteDraftRest = OrderFromQuoteDraft;
export type TOrderFromQuoteDraftGraphql = TCtpOrderQuoteCommand;

export type TCreateOrderBuilder<
  TOrderModel extends
    | TOrderRest
    | TOrderGraphql
    | TOrderFromCartDraftRest
    | TOrderFromCartDraftGraphql
    | TOrderFromQuoteDraftRest
    | TOrderFromQuoteDraftGraphql,
> = () => TBuilder<TOrderModel>;
