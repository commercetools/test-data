import type { TBuilder } from '@/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TCustomerLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TCustomerLimitsProjectionGraphql = TCustomerLimitsProjection & {
  __typename: 'CustomerLimitsProjection';
};

export type TCustomerLimitsProjectionBuilder =
  TBuilder<TCustomerLimitsProjection>;
export type TCreateCustomerLimitsProjectionBuilder =
  () => TCustomerLimitsProjectionBuilder;
