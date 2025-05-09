/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../core/test-utils';
import { TDeliveryItem, TDeliveryItemGraphql } from './types';
import * as DeliveryItem from '.';

describe('builder', () => {
  const defaultDeliveryItemSpec = {
    id: expect.any(String),
    quantity: expect.any(Number),
  };

  it(
    ...createBuilderSpec<TDeliveryItem, TDeliveryItem>(
      'default',
      DeliveryItem.random(),
      expect.objectContaining(defaultDeliveryItemSpec)
    )
  );

  it(
    ...createBuilderSpec<TDeliveryItem, TDeliveryItemGraphql>(
      'graphql',
      DeliveryItem.random(),
      expect.objectContaining({
        ...defaultDeliveryItemSpec,
        __typename: 'DeliveryItem',
      })
    )
  );

  it('should allow customization', () => {
    const id = 'test-id';
    const quantity = 1234;
    const deliveryItemMock = DeliveryItem.random()
      .id(id)
      .quantity(quantity)
      .buildGraphql();

    expect(deliveryItemMock).toEqual(
      expect.objectContaining({
        id,
        quantity,
        __typename: 'DeliveryItem',
      })
    );
  });
});
