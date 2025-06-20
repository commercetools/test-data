import type { DeliveryItem } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDeliveryItem } from '@/graphql-types';

/**
 * @deprecated use `TDeliveryItemRest` instead
 */
export type TDeliveryItem = DeliveryItem;
export type TDeliveryItemRest = DeliveryItem;
export type TDeliveryItemGraphql = TCtpDeliveryItem;

export type TCreateDeliveryItemBuilder<
  TDeliveryItemModel extends TDeliveryItemRest | TDeliveryItemGraphql,
> = () => TBuilder<TDeliveryItemModel>;
