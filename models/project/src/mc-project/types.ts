import type { ShippingRateInputType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TAllPermissionsForAllApplications,
  TAllPermissionsForAllApplicationsGraphql,
} from './all-permissions-for-all-applications';
import type {
  TAppliedActionRight,
  TAppliedActionRightGraphql,
} from './applied-action-right';
import type {
  TAppliedDataFence,
  TAppliedDataFenceGraphql,
} from './applied-data-fence';
import type {
  TAppliedPermission,
  TAppliedPermissionGraphql,
} from './applied-permission';
import type { TProjectExpiry, TProjectExpiryGraphql } from './project-expiry';
import type {
  TProjectSuspension,
  TProjectSuspensionGraphql,
} from './project-suspension';

export type TMcProject = {
  // Meta
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  version: number;
  // Info
  key: string;
  name: string;
  countries: string[];
  languages: string[];
  currencies: string[];
  plan: 'Standard' | 'Unlimited';
  // TODO: use Organization type
  owner: {
    id: string;
    createdAt: string;
    name: string;
  };
  initialized: boolean;
  isProductionProject: boolean;
  expiry: TProjectExpiry;
  suspension: TProjectSuspension;
  shippingRateInputType?: ShippingRateInputType;
  sampleDataImportDataset?: string;
  apiVersion: string;
  allAppliedActionRights: TAppliedActionRight[];
  allAppliedDataFences: TAppliedDataFence[];
  allAppliedPermissions: TAppliedPermission[];
  allPermissionsForAllApplications: TAllPermissionsForAllApplications;
};
export type TMcProjectGraphql = {
  __typename: 'Project';
  // Meta
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  version: number;
  // Info
  key: string;
  name: string;
  countries: string[];
  languages: string[];
  currencies: string[];
  plan: 'Standard' | 'Unlimited';
  // TODO: use Organization type
  owner: {
    __typename: 'Organization';
    id: string;
    createdAt: string;
    name: string;
  };
  initialized: boolean;
  isProductionProject: boolean;
  expiry: TProjectExpiryGraphql;
  suspension: TProjectSuspensionGraphql;
  shippingRateInputType?: ShippingRateInputType;
  sampleDataImportDataset?: string;
  apiVersion: string;
  allAppliedActionRights: TAppliedActionRightGraphql[];
  allAppliedDataFences: TAppliedDataFenceGraphql[];
  allAppliedPermissions: TAppliedPermissionGraphql[];
  allPermissionsForAllApplications: TAllPermissionsForAllApplicationsGraphql;
};
export type TMcProjectDraft = {
  key: string;
  name: string;
  ownerId: string;
  countries: string[];
  currencies: string[];
  languages: string[];
  deleteDaysAfterCreation?: number;
  messagesEnabled?: boolean;
};
export type TMcProjectDraftGraphql = TMcProjectDraft & {
  __typename: 'ProjectDraft';
};

export type TMcProjectBuilder = TBuilder<TMcProject>;
export type TMcProjectDraftBuilder = TBuilder<TMcProjectDraft>;
export type TCreateMcProjectBuilder = () => TMcProjectBuilder;
export type TCreateMcProjectDraftBuilder = () => TMcProjectDraftBuilder;
