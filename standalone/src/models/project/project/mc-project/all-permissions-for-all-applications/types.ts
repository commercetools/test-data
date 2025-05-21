import type { TBuilder } from '@/core';
import type {
  TAppliedActionRight,
  TAppliedActionRightGraphql,
} from '../applied-action-right';
import type {
  TAppliedDataFence,
  TAppliedDataFenceGraphql,
} from '../applied-data-fence';
import type {
  TAppliedPermission,
  TAppliedPermissionGraphql,
} from '../applied-permission';
import type {
  TAppliedMenuVisibilities,
  TAppliedMenuVisibilitiesGraphql,
} from './applied-menu-visibilities';

export type TAllPermissionsForAllApplications = {
  allAppliedActionRights: TAppliedActionRight[];
  allAppliedDataFences: TAppliedDataFence[];
  allAppliedMenuVisibilities: TAppliedMenuVisibilities[];
  allAppliedPermissions: TAppliedPermission[];
};
export type TAllPermissionsForAllApplicationsGraphql = {
  __typename: 'AllPermissionsForAllApplications';
  allAppliedActionRights: TAppliedActionRightGraphql[];
  allAppliedDataFences: TAppliedDataFenceGraphql[];
  allAppliedMenuVisibilities: TAppliedMenuVisibilitiesGraphql[];
  allAppliedPermissions: TAppliedPermissionGraphql[];
};

export type TAllPermissionsForAllApplicationsBuilder =
  TBuilder<TAllPermissionsForAllApplications>;
export type TCreateAllPermissionsForAllApplicationsBuilder =
  () => TAllPermissionsForAllApplicationsBuilder;
