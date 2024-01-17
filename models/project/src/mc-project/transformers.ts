import { Transformer } from '@commercetools-test-data/core';
import type { TMcProject, TMcProjectGraphql } from './types';

const transformers = {
  default: Transformer<TMcProject, TMcProject>('default', {
    buildFields: [
      'owner',
      'expiry',
      'suspension',
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allPermissionsForAllApplications',
    ],
  }),
  rest: Transformer<TMcProject, TMcProjectGraphql>('rest', {
    buildFields: [
      'owner',
      'expiry',
      'suspension',
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allPermissionsForAllApplications',
    ],
  }),
  graphql: Transformer<TMcProject, TMcProjectGraphql>('graphql', {
    buildFields: [
      'owner',
      'expiry',
      'suspension',
      'allAppliedActionRights',
      'allAppliedDataFences',
      'allAppliedPermissions',
      'allPermissionsForAllApplications',
    ],
    addFields: () => ({
      __typename: 'Project',
    }),
  }),
};

export default transformers;
