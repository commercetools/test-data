import type { TBuilder } from '@commercetools-test-data/core';
import { Order, OrderFromCartDraft } from '@commercetools/platform-sdk';

export type TOrder = Order;
export type TOrderFromCartDraft = OrderFromCartDraft;

export type TOrderGraphql = TOrder & {
  __typename: 'Order';
};
export type TOrderFromCartDraftGraphql = TOrderFromCartDraft & {
  __typename: 'OrderCartCommand';
};

export type TOrderBuilder = TBuilder<TOrder>;
export type TOrderFromCartDraftBuilder = TBuilder<TOrderFromCartDraft>;
export type TCreateOrderBuilder = () => TOrderBuilder;
export type TCreateOrderFromCartDraftBuilder = () => TOrderFromCartDraftBuilder;
