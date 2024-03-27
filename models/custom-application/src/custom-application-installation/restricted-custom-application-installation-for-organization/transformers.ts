import { Transformer } from '@commercetools-test-data/core';
import type {
  TRestrictedCustomApplicationInstallationForOrganization,
  TRestrictedCustomApplicationInstallationForOrganizationGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TRestrictedCustomApplicationInstallationForOrganization,
    TRestrictedCustomApplicationInstallationForOrganization
  >('default', {
    buildFields: ['application', 'acceptedPermissions', 'projects'],
  }),
  graphql: Transformer<
    TRestrictedCustomApplicationInstallationForOrganization,
    TRestrictedCustomApplicationInstallationForOrganizationGraphql
  >('graphql', {
    buildFields: ['application', 'acceptedPermissions', 'projects'],
    addFields: () => ({
      __typename: 'RestrictedCustomApplicationInstallationForOrganization',
    }),
  }),
};

export default transformers;
