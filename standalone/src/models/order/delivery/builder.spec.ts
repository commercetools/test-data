/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { Address } from '@/models/commons';
import { TDelivery, TDeliveryGraphql } from './types';
import { Delivery } from '.';

describe('Delviery builder', () => {
  const deliveryMockBuilder = Delivery.random()
    .key('delivery-key-1')
    .address(Address.random());

  it('should build rest representation', () => {
    const deliveryMock = deliveryMockBuilder.buildRest<TDelivery>();

    expect(deliveryMock).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        key: 'delivery-key-1',
        items: expect.arrayContaining([
          expect.objectContaining({
            quantity: expect.any(Number),
          }),
        ]),
        parcels: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        address: expect.objectContaining({
          firstName: expect.any(String),
        }),
        createdAt: expect.any(String),
      })
    );
  });

  it('should build grapqhl representation', () => {
    const deliveryMock = deliveryMockBuilder.buildGraphql<TDeliveryGraphql>();

    expect(deliveryMock).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        key: 'delivery-key-1',
        items: expect.arrayContaining([
          expect.objectContaining({
            quantity: expect.any(Number),
            __typename: 'DeliveryItem',
          }),
        ]),
        parcels: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            __typename: 'Parcel',
          }),
        ]),
        address: expect.objectContaining({
          firstName: expect.any(String),
          __typename: 'Address',
        }),
        createdAt: expect.any(String),
        __typename: 'Delivery',
      })
    );
  });
});
