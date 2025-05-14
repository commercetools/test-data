import type { DeliveryItem } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TDeliveryItem = DeliveryItem;

export type TDeliveryItemGraphql = TDeliveryItem & {
  __typename: 'DeliveryItem';
};

export type TDeliveryItemBuilder = TBuilder<DeliveryItem>;
export type TCreateDeliveryItemBuilder = () => TDeliveryItemBuilder;
