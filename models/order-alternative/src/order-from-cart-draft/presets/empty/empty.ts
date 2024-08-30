import { TSpecializedBuilder } from '@commercetools-test-data/core';
import { OrderFromCartDraftGraphql, OrderFromCartDraftRest } from '../..';
import {
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../../../types';

export const restPreset = (): TSpecializedBuilder<TOrderFromCartDraftRest> =>
  OrderFromCartDraftRest.random()
    .cart(undefined)
    .orderNumber(undefined)
    .purchaseOrderNumber(undefined)
    .paymentState(undefined)
    .orderState(undefined)
    .state(undefined)
    .shipmentState(undefined)
    .custom(undefined);

export const graphqlPreset =
  (): TSpecializedBuilder<TOrderFromCartDraftGraphql> =>
    OrderFromCartDraftGraphql.random()
      .cart(undefined)
      .orderNumber(undefined)
      .purchaseOrderNumber(undefined)
      .paymentState(undefined)
      .orderState(undefined)
      .state(undefined)
      .shipmentState(undefined)
      .custom(undefined);
