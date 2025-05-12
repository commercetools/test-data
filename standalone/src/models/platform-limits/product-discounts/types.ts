import type { TBuilder } from '../../../core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TProductDiscountLimitsProjection = {
  totalActive: TLimitWithCurrent;
};

export type TProductDiscountLimitsProjectionGraphql =
  TProductDiscountLimitsProjection & {
    __typename: 'ProductDiscountLimitsProjection';
  };

export type TProductDiscountLimitsProjectionBuilder =
  TBuilder<TProductDiscountLimitsProjection>;
export type TCreateProductDiscountLimitsProjectionBuilder =
  () => TProductDiscountLimitsProjectionBuilder;
