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
    buildFields: ['acceptedPermissions'],
  }),
  graphql: Transformer<
    TCustomApplicationInstallation,
    TCustomApplicationInstallationGraphql
  >('graphql', {
    buildFields: ['acceptedPermissions'],
    addFields: () => ({
      __typename: 'CustomApplicationInstallation',
    }),
  }),
};

export default transformers;
