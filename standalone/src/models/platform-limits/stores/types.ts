import type { TBuilder } from '../../../core';
import type { TLimit } from '../limit';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TStoreLimitsProjection = {
  inventorySupplyChannels: TLimit;
  productDistributionChannels: TLimit;
  total: TLimitWithCurrent;
};

export type TStoreLimitsProjectionGraphql = TStoreLimitsProjection & {
  __typename: 'StoreLimitsProjection';
};

export type TStoreLimitsProjectionBuilder = TBuilder<TStoreLimitsProjection>;
export type TCreateStoreLimitsProjectionBuilder =
  () => TStoreLimitsProjectionBuilder;
