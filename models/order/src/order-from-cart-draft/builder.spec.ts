/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrderFromCartDraft, TOrderFromCartDraftGraphql } from '../types';
import * as OrderFromCartDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraft>(
      'default',
      OrderFromCartDraft.random(),
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
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraft>(
      'rest',
      OrderFromCartDraft.random(),
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
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraftGraphql>(
      'graphql',
      OrderFromCartDraft.random(),
      expect.objectContaining({
        cart: expect.objectContaining({
          typeId: 'cart',
          __typename: 'Reference',
        }),
        version: expect.any(Number),
        orderNumber: expect.any(String),
        purchaseOrderNumber: expect.any(String),
        paymentState: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
          __typename: 'Reference',
        }),
        shipmentState: expect.any(String),
        custom: null,
        __typename: 'OrderCartCommand',
      })
    )
  );
});
