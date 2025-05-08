import { ShippingInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpShippingInfo } from '../../../graphql-types';

export type TShippingInfoRest = ShippingInfo;

export type TShippingInfoGraphql = TCtpShippingInfo;

export type TCreateShippingInfoBuilder<
  TModel extends TShippingInfoRest | TShippingInfoGraphql,
> = () => TBuilder<TModel>;
