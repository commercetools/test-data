import { TSpecializedBuilder } from '@commercetools-test-data/core';
import { OrderFromCartDraftGraphql, OrderFromCartDraftRest } from '..';
import {
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../../types';

const emptyRest = (): TSpecializedBuilder<TOrderFromCartDraftRest> =>
  OrderFromCartDraftRest.random()
    .cart(undefined)
    .orderNumber(undefined)
    .purchaseOrderNumber(undefined)
    .paymentState(undefined)
    .orderState(undefined)
    .state(undefined)
    .shipmentState(undefined)
    .custom(undefined);

const emptyGraphql = (): TSpecializedBuilder<TOrderFromCartDraftGraphql> =>
  OrderFromCartDraftGraphql.random()
    .cart(undefined)
    .orderNumber(undefined)
    .purchaseOrderNumber(undefined)
    .paymentState(undefined)
    .orderState(undefined)
    .state(undefined)
    .shipmentState(undefined)
    .custom(undefined);

export default {
  rest: emptyRest,
  graphql: emptyGraphql,
};
