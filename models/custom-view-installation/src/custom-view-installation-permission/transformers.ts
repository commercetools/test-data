import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomViewInstallationPermission,
  TCustomViewInstallationPermissionGraphql,
} from './types';

const transformers = {
  graphql: Transformer<
    TCustomViewInstallationPermission,
    TCustomViewInstallationPermissionGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomViewInstallationPermission',
    }),
  }),
};

export default transformers;
