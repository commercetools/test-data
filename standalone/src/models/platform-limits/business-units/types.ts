import type { TBuilder } from '../../../core';
import type { TLimit } from '../limit';

export type TBusinessUnitLimitsProjection = {
  maxDivisions: TLimit;
  maxDepthLimit: TLimit;
  maxAssociates: TLimit;
  maxAssociateRoles: TLimit;
};

export type TBusinessUnitLimitsProjectionGraphql =
  TBusinessUnitLimitsProjection & {
    __typename: 'BusinessUnitLimitsProjection';
  };

export type TBusinessUnitLimitsProjectionBuilder =
  TBuilder<TBusinessUnitLimitsProjection>;
export type TCreateBusinessUnitLimitsProjectionBuilder =
  () => TBusinessUnitLimitsProjectionBuilder;
