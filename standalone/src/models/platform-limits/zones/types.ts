import type { TBuilder } from '@/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TZoneLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TZoneLimitsProjectionGraphql = TZoneLimitsProjection & {
  __typename: 'ZoneLimitsProjection';
};

export type TZoneLimitsProjectionBuilder = TBuilder<TZoneLimitsProjection>;
export type TCreateZoneLimitsProjectionBuilder =
  () => TZoneLimitsProjectionBuilder;
