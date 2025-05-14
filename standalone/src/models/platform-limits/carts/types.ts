import type { TBuilder } from '@/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TCartLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TCartLimitsProjectionGraphql = TCartLimitsProjection & {
  __typename: 'CartLimitsProjection';
};

export type TCartLimitsProjectionBuilder = TBuilder<TCartLimitsProjection>;
export type TCreateCartLimitsProjectionBuilder =
  () => TCartLimitsProjectionBuilder;
