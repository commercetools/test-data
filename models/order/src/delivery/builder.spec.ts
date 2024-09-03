/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { Address } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { DeliveryItem } from '../delivery-item';
import { Parcel } from '../parcel';
import { TDelivery, TDeliveryGraphql } from './types';
import * as Delivery from '.';

describe('builder', () => {
  const defaultDeliverySpec = {
    id: expect.any(String),
    key: null,
    items: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        quantity: expect.any(Number),
      }),
    ]),
    parcels: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
      }),
    ]),
    address: null,
    custom: null,
    createdAt: expect.any(String),
  };

  it(
    ...createBuilderSpec<TDelivery, TDelivery>(
      'default',
      Delivery.random(),
      expect.objectContaining(defaultDeliverySpec)
    )
  );

  it(
    ...createBuilderSpec<TDelivery, TDeliveryGraphql>(
      'graphql',
      Delivery.random(),
      expect.objectContaining({
        ...defaultDeliverySpec,
        __typename: 'Delivery',
      })
    )
  );

  it('should allow customization', () => {
    const id = 'test-id';
    const key = 'test key';
    const streetName = 'test street name';
    const createdAt = '2024-08-27T19:26:08.429Z';

    const item = DeliveryItem.random().id(id);
    const parcel = Parcel.random().id(id);
    const address = Address.random().streetName(streetName);

    const deliveryMock = Delivery.random()
      .id(id)
      .key(key)
      .items([item])
      .parcels([parcel])
      .address(address)
      // .custom()
      .createdAt(createdAt)
      .buildGraphql();

    expect(deliveryMock).toEqual(
      expect.objectContaining({
        id,
        key,
        items: expect.arrayContaining([expect.objectContaining({ id })]),
        parcels: expect.arrayContaining([expect.objectContaining({ id })]),
        address: expect.objectContaining({ streetName }),
        // custom:
        createdAt,
        __typename: 'Delivery',
      })
    );
  });
});
