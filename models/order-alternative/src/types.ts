import {
  Order,
  OrderFromCartDraft,
  OrderFromQuoteDraft,
} from '@commercetools/platform-sdk';
import { TCartGraphql } from '@commercetools-test-data/cart';
import { TCartDiscountGraphql } from '@commercetools-test-data/cart-discount';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TSpecializedBuilder } from '@commercetools-test-data/core';
import { TCustomerGraphql } from '@commercetools-test-data/customer';
import { TCustomerGroupGraphql } from '@commercetools-test-data/customer-group';
import { TQuoteGraphql } from '@commercetools-test-data/quote';
import { TCompanyGraphql, TDivisionGraphql } from '../../business-unit/src';
import { TStateGraphql } from '../../state/src';
import { TStoreGraphql } from '../../store/src';

export type TOrderRest = Order;

export type TOrderGraphql = Omit<
  Order,
  | 'customerGroup'
  | 'refusedGifts'
  | 'store'
  | 'businessUnit'
  | 'state'
  | 'cart'
  | 'quote'
> & {
  customer?: TCustomerGraphql;
  customerGroup?: TCustomerGroupGraphql;
  customerGroupRef?: TReferenceGraphql;
  refusedGifts: TCartDiscountGraphql[];
  refusedGiftsRefs: TReferenceGraphql[];
  store?: TStoreGraphql;
  storeRef?: TReferenceGraphql;
  businessUnit?: TCompanyGraphql | TDivisionGraphql;
  businessUnitRef?: TReferenceGraphql;
  state?: TStateGraphql;
  stateRef?: TReferenceGraphql | null;
  cart?: TCartGraphql;
  cartRef?: TReferenceGraphql | null;
  quote?: TQuoteGraphql;
  quoteRef?: TReferenceGraphql | null;
  __typename: 'Order';
};

export type TOrderFromCartDraftRest = OrderFromCartDraft;
export type TOrderFromQuoteDraftRest = OrderFromQuoteDraft;

export type TOrderFromCartDraftGraphql = TOrderFromCartDraftRest;
export type TOrderFromQuoteDraftGraphql = TOrderFromQuoteDraftRest;

export type TCreateOrderBuilder<
  TModel extends
    | TOrderRest
    | TOrderGraphql
    | TOrderFromCartDraftRest
    | TOrderFromCartDraftGraphql
    | TOrderFromQuoteDraftRest
    | TOrderFromQuoteDraftGraphql,
> = () => TSpecializedBuilder<TModel>;
