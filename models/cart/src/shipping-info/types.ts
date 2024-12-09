import { ShippingInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpShippingInfo } from '@commercetools-test-data/graphql-types';

export type TShippingInfoRest = ShippingInfo;

export type TShippingInfoGraphql = TCtpShippingInfo;

export type TCreateShippingInfoBuilder<
  TModel extends TShippingInfoRest | TShippingInfoGraphql,
> = () => TBuilder<TModel>;
