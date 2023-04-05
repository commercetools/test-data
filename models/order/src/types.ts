import {
  BusinessUnit,
  Cart,
  CartDiscount,
  CustomerGroup,
  Order,
  OrderFromCartDraft,
  Quote,
  State,
  Store,
} from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TOrder = Omit<
  Order,
  | 'customerGroup'
  | 'refusedGifts'
  | 'store'
  | 'businessUnit'
  | 'state'
  | 'cart'
  | 'quote'
> & {
  customerGroup: CustomerGroup;
  refusedGifts: Array<CartDiscount>;
  store: Store;
  businessUnit: BusinessUnit;
  state: State;
  cart: Cart;
  quote: Quote;
};

export type TOrderRest = Order;

export type TOrderGraphql = TOrder & {
  customerGroupRef: TReferenceGraphql | null;
  refusedGiftsRefs: Array<TReferenceGraphql> | null;
  storeRef: TReferenceGraphql | null;
  businessUnitRef: TReferenceGraphql | null;
  stateRef: TReferenceGraphql | null;
  cartRef: TReferenceGraphql | null;
  quoteRef: TReferenceGraphql | null;
  __typename: 'Order';
};

export type TOrderFromCartDraft = OrderFromCartDraft;

export type TOrderFromCartDraftGraphql = TOrderFromCartDraft & {
  __typename: 'OrderCartCommand';
};

export type TOrderBuilder = TBuilder<TOrder>;
export type TOrderFromCartDraftBuilder = TBuilder<TOrderFromCartDraft>;
export type TCreateOrderBuilder = () => TOrderBuilder;
export type TCreateOrderFromCartDraftBuilder = () => TOrderFromCartDraftBuilder;
