import type { Delivery } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpDelivery } from '@/graphql-types';

/**
 * @deprecated use `TDeliveryRest` instead
 */
export type TDelivery = Delivery;
export type TDeliveryRest = Delivery;
export type TDeliveryGraphql = TCtpDelivery;

export type TCreateDeliveryBuilder<
  TDeliveryModel extends TDeliveryRest | TDeliveryGraphql,
> = () => TBuilder<TDeliveryModel>;
