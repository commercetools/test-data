import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationInstallation,
  TCustomApplicationInstallationGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationInstallation,
    TCustomApplicationInstallation
  >('default', {
    buildFields: ['acceptedPermissions', 'projects'],
  }),
  graphql: Transformer<
    TCustomApplicationInstallation,
    TCustomApplicationInstallationGraphql
  >('graphql', {
    buildFields: ['acceptedPermissions', 'projects'],
    addFields: () => ({
      __typename: 'CustomApplicationInstallation',
    }),
  }),
};

export default transformers;
