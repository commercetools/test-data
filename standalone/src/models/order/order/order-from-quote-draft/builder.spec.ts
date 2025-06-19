/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TOrderFromQuoteDraft,
  TOrderFromQuoteDraftGraphql,
} from '../types';
import { OrderFromQuoteDraft } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrderFromQuoteDraft, TOrderFromQuoteDraft>(
      'default',
      OrderFromQuoteDraft.random(),
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
    ...createBuilderSpec<TOrderFromQuoteDraft, TOrderFromQuoteDraft>(
      'rest',
      OrderFromQuoteDraft.random(),
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
    ...createBuilderSpec<TOrderFromQuoteDraft, TOrderFromQuoteDraftGraphql>(
      'graphql',
      OrderFromQuoteDraft.random(),
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
