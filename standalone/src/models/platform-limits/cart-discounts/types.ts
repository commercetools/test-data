import type { TBuilder } from '@/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TCartDiscountLimitsProjection = {
  totalActiveWithoutDiscountCodes: TLimitWithCurrent;
};

export type TCartDiscountLimitsProjectionGraphql =
  TCartDiscountLimitsProjection & {
    __typename: 'CartDiscountLimitsProjection';
  };

export type TCartDiscountLimitsProjectionBuilder =
  TBuilder<TCartDiscountLimitsProjection>;
export type TCreateCartDiscountLimitsProjectionBuilder =
  () => TCartDiscountLimitsProjectionBuilder;
