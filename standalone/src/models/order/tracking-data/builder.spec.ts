/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TTrackingData, TTrackingDataGraphql } from './types';
import { TrackingData } from '.';

describe('builder', () => {
  const defaultTrackingDataSpec = {
    trackingId: expect.any(String),
    carrier: expect.any(String),
    provider: expect.any(String),
    providerTransaction: expect.any(String),
    isReturn: expect.any(Boolean),
  };

  it(
    ...createBuilderSpec<TTrackingData, TTrackingData>(
      'default',
      TrackingData.random(),
      expect.objectContaining(defaultTrackingDataSpec)
    )
  );
  it(
    ...createBuilderSpec<TTrackingData, TTrackingDataGraphql>(
      'graphql',
      TrackingData.random(),
      expect.objectContaining({
        ...defaultTrackingDataSpec,
        __typename: 'TrackingData',
      })
    )
  );

  it('should allow customization', () => {
    const trackingId = 'test-tracking-id';
    const carrier = 'test-carrier';
    const provider = 'test-provider';
    const providerTransaction = 'test-provider-transaction';
    const isReturn = true;

    const trackingDataMock = TrackingData.random()
      .trackingId(trackingId)
      .carrier(carrier)
      .provider(provider)
      .providerTransaction(providerTransaction)
      .isReturn(isReturn)
      .buildGraphql();

    expect(trackingDataMock).toEqual(
      expect.objectContaining({
        trackingId,
        carrier,
        provider,
        providerTransaction,
        isReturn,
      })
    );
  });
});
