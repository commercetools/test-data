import {
  BusinessUnit,
  Cart,
  CartDiscount,
  CustomerGroup,
  Order,
  OrderFromCartDraft,
  OrderFromQuoteDraft,
  Quote,
  State,
  Store,
} from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomer } from '@commercetools-test-data/customer';

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
  customer: TCustomer | null;
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
export type TOrderFromQuoteDraft = OrderFromQuoteDraft;

export type TOrderFromCartDraftGraphql = TOrderFromCartDraft;
export type TOrderFromQuoteDraftGraphql = TOrderFromQuoteDraft;

export type TOrderBuilder = TBuilder<TOrder>;
export type TOrderFromCartDraftBuilder = TBuilder<TOrderFromCartDraft>;
export type TOrderFromQuoteDraftBuilder = TBuilder<TOrderFromQuoteDraft>;

export type TCreateOrderBuilder = () => TOrderBuilder;
export type TCreateOrderFromCartDraftBuilder = () => TOrderFromCartDraftBuilder;
export type TCreateOrderFromQuoteDraftBuilder =
  () => TOrderFromQuoteDraftBuilder;
