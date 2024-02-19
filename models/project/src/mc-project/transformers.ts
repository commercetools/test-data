import { Transformer } from '@commercetools-test-data/core';
import type { TMcProject, TMcProjectGraphql } from './types';

const buildFields: (keyof TMcProject)[] = [
  'owner',
  'expiry',
  'suspension',
  'allAppliedActionRights',
  'allAppliedDataFences',
  'allAppliedPermissions',
  'allPermissionsForAllApplications',
];

const transformers = {
  default: Transformer<TMcProject, TMcProject>('default', {
    buildFields,
  }),
  rest: Transformer<TMcProject, TMcProject>('rest', {
    buildFields,
  }),
  graphql: Transformer<TMcProject, TMcProjectGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'Project',
    }),
  }),
};

export default transformers;
