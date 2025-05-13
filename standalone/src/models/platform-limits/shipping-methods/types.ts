import type { TBuilder } from '@/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TShippingMethodLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TShippingMethodLimitsProjectionGraphql =
  TShippingMethodLimitsProjection & {
    __typename: 'ShippingMethodLimitsProjection';
  };

export type TShippingMethodLimitsProjectionBuilder =
  TBuilder<TShippingMethodLimitsProjection>;
export type TCreateShippingMethodLimitsProjectionBuilder =
  () => TShippingMethodLimitsProjectionBuilder;
