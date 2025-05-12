import { Transformer } from '../../../core';
import type {
  TCustomApplicationInstallation,
  TCustomApplicationInstallationGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationInstallation,
    TCustomApplicationInstallation
  >('default', {
    buildFields: ['acceptedPermissions', 'application'],
  }),
  graphql: Transformer<
    TCustomApplicationInstallation,
    TCustomApplicationInstallationGraphql
  >('graphql', {
    buildFields: ['acceptedPermissions', 'application'],
    addFields: () => ({
      __typename: 'RestrictedCustomApplicationInstallationForOrganization',
    }),
  }),
};

export default transformers;
