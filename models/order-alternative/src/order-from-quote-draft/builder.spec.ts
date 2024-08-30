/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TOrderFromQuoteDraftRest,
  TOrderFromQuoteDraftGraphql,
} from '../types';
import { OrderFromQuoteDraftRest, OrderFromQuoteDraftGraphql } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrderFromQuoteDraftRest, TOrderFromQuoteDraftRest>(
      'rest',
      // @ts-ignore
      OrderFromQuoteDraftRest.random(),
      expect.objectContaining({
        version: expect.any(Number),
        quote: expect.objectContaining({
          typeId: 'quote',
        }),
        quoteStateToAccepted: expect.any(Boolean),
        orderNumber: expect.any(String),
        paymentState: expect.any(String),
        shipmentState: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TOrderFromQuoteDraftGraphql,
      TOrderFromQuoteDraftGraphql
    >(
      'graphql',
      // @ts-ignore
      OrderFromQuoteDraftGraphql.random(),
      expect.objectContaining({
        version: expect.any(Number),
        quote: expect.objectContaining({
          typeId: 'quote',
        }),
        quoteStateToAccepted: expect.any(Boolean),
        orderNumber: expect.any(String),
        paymentState: expect.any(String),
        shipmentState: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
      })
    )
  );
});
