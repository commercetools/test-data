/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrderFromCartDraftGraphql, TOrderFromCartDraftRest } from '../types';
import { OrderFromCartDraftGraphql, OrderFromCartDraftRest } from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrderFromCartDraftRest, TOrderFromCartDraftRest>(
      'rest',
      // @ts-ignore
      OrderFromCartDraftRest.random(),
      expect.objectContaining({
        cart: expect.objectContaining({
          typeId: 'cart',
        }),
        version: expect.any(Number),
        orderNumber: expect.any(String),
        purchaseOrderNumber: expect.any(String),
        paymentState: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        shipmentState: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<
      TOrderFromCartDraftGraphql,
      TOrderFromCartDraftGraphql
    >(
      'graphql',
      // @ts-ignore
      OrderFromCartDraftGraphql.random(),
      expect.objectContaining({
        cart: expect.objectContaining({
          typeId: 'cart',
        }),
        version: expect.any(Number),
        orderNumber: expect.any(String),
        purchaseOrderNumber: expect.any(String),
        paymentState: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        shipmentState: expect.any(String),
        custom: null,
      })
    )
  );
});
