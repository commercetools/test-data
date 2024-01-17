import { Transformer } from '@commercetools-test-data/core';
import type {
  TAllPermissionsForAllApplications,
  TAllPermissionsForAllApplicationsGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplications
  >('default', {
    buildFields: [
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allAppliedMenuVisibilities',
    ],
  }),
  rest: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplicationsGraphql
  >('rest', {
    buildFields: [
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allAppliedMenuVisibilities',
    ],
  }),
  graphql: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplicationsGraphql
  >('graphql', {
    buildFields: [
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allAppliedMenuVisibilities',
    ],
    addFields: () => ({
      __typename: 'AllPermissionsForAllApplications',
    }),
  }),
};

export default transformers;
