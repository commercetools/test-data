import type { TBuilder } from '../../../core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TCustomerGroupLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TCustomerGroupLimitsProjectionGraphql =
  TCustomerGroupLimitsProjection & {
    __typename: 'CustomerGroupLimitsProjection';
  };

export type TCustomerGroupLimitsProjectionBuilder =
  TBuilder<TCustomerGroupLimitsProjection>;
export type TCreateCustomerGroupLimitsProjectionBuilder =
  () => TCustomerGroupLimitsProjectionBuilder;
