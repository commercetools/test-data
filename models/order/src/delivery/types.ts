import type { Delivery } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TDelivery = Delivery;

export type TDeliveryGraphql = TDelivery & {
  __typename: 'Delivery';
};

export type TDeliveryBuilder = TBuilder<Delivery>;
export type TCreateDeliveryBuilder = () => TDeliveryBuilder;
