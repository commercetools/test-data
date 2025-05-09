import { Transformer } from '../../../../core';
import type {
  TAllPermissionsForAllApplications,
  TAllPermissionsForAllApplicationsGraphql,
} from './types';

const buildFields: (keyof TAllPermissionsForAllApplications)[] = [
  'allAppliedActionRights',
  'allAppliedDataFences',
  'allAppliedPermissions',
  'allAppliedMenuVisibilities',
];

const transformers = {
  default: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplications
  >('default', {
    buildFields,
  }),
  rest: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplications
  >('rest', {
    buildFields,
  }),
  graphql: Transformer<
    TAllPermissionsForAllApplications,
    TAllPermissionsForAllApplicationsGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'AllPermissionsForAllApplications',
    }),
  }),
};

export default transformers;
