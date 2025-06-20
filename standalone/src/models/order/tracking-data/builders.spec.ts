import type { TTrackingDataRest, TTrackingDataGraphql } from './types';
import { TrackingData, TrackingDataGraphql, TrackingDataRest } from './index';

const validateModel = (
  model: TTrackingDataRest | TTrackingDataGraphql,
  options?: {
    trackingId?: string | null;
    carrier?: string | null;
    provider?: string | null;
    providerTransaction?: string | null;
    isReturn?: boolean | null;
  }
) => {
  expect(model).toEqual(
    expect.objectContaining({
      trackingId: options?.trackingId || expect.any(String),
      carrier: options?.carrier || expect.any(String),
      provider: options?.provider || expect.any(String),
      providerTransaction: options?.providerTransaction || expect.any(String),
      isReturn:
        options?.isReturn !== undefined
          ? options.isReturn
          : expect.any(Boolean),
    })
  );
};

describe('TrackingData model builders', () => {
  it('builds a REST model', () => {
    const restModel = TrackingDataRest.random().build();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = TrackingDataRest.random()
      .trackingId('TD-12345')
      .carrier('DHL')
      .provider('DHL Express')
      .providerTransaction('TXN-67890')
      .isReturn(true)
      .build();

    validateModel(restModel, {
      trackingId: 'TD-12345',
      carrier: 'DHL',
      provider: 'DHL Express',
      providerTransaction: 'TXN-67890',
      isReturn: true,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TrackingDataGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'TrackingData',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = TrackingDataGraphql.random()
      .trackingId('TD-12345')
      .carrier('DHL')
      .provider('DHL Express')
      .providerTransaction('TXN-67890')
      .isReturn(false)
      .build();

    validateModel(graphqlModel, {
      trackingId: 'TD-12345',
      carrier: 'DHL',
      provider: 'DHL Express',
      providerTransaction: 'TXN-67890',
      isReturn: false,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'TrackingData',
      })
    );
  });
});

describe('TrackingData model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = TrackingData.random().buildRest();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = TrackingData.random()
      .trackingId('TD-12345')
      .carrier('FedEx')
      .provider('FedEx Ground')
      .providerTransaction('TXN-11111')
      .isReturn(true)
      .buildRest();

    validateModel(restModel, {
      trackingId: 'TD-12345',
      carrier: 'FedEx',
      provider: 'FedEx Ground',
      providerTransaction: 'TXN-11111',
      isReturn: true,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TrackingData.random().buildGraphql();

    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'TrackingData',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = TrackingData.random()
      .trackingId('TD-12345')
      .carrier('UPS')
      .provider('UPS Express')
      .providerTransaction('TXN-22222')
      .isReturn(false)
      .buildGraphql();

    validateModel(graphqlModel, {
      trackingId: 'TD-12345',
      carrier: 'UPS',
      provider: 'UPS Express',
      providerTransaction: 'TXN-22222',
      isReturn: false,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'TrackingData',
      })
    );
  });
});
