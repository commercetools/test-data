import { TSpecializedBuilder } from '@commercetools-test-data/core';
import { OrderFromCartDraftGraphql, OrderFromCartDraftRest } from '../..';
import {
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../../../types';

export const emptyRestPreset =
  (): TSpecializedBuilder<TOrderFromCartDraftRest> =>
    OrderFromCartDraftRest.random()
      .cart(undefined)
      .orderNumber(undefined)
      .purchaseOrderNumber(undefined)
      .paymentState(undefined)
      .orderState(undefined)
      .state(undefined)
      .shipmentState(undefined)
      .custom(undefined);

export const emptyGraphqlPreset =
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

export default {
  rest: emptyRestPreset,
  graphql: emptyGraphqlPreset,
};
