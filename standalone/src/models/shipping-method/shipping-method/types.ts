import type { ShippingMethod } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingMethod } from '@/graphql-types';

/**
 * @deprecated use `TShippingMethodRest` or `TShippingMethodGraphql` instead
 */
export type TShippingMethod = ShippingMethod;

export type TShippingMethodRest = ShippingMethod;
export type TShippingMethodGraphql = TCtpShippingMethod;

export type TCreateShippingMethodBuilder<
  TShippingMethodModel extends TShippingMethodRest | TShippingMethodGraphql,
> = () => TBuilder<TShippingMethodModel>;
