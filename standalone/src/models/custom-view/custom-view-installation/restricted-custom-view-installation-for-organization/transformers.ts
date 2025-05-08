import { Transformer } from '../../../../core';
import type {
  TRestrictedCustomViewInstallationForOrganization,
  TRestrictedCustomViewInstallationForOrganizationGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TRestrictedCustomViewInstallationForOrganization,
    TRestrictedCustomViewInstallationForOrganization
  >('default', {
    buildFields: ['customView', 'acceptedPermissions', 'projects'],
  }),
  graphql: Transformer<
    TRestrictedCustomViewInstallationForOrganization,
    TRestrictedCustomViewInstallationForOrganizationGraphql
  >('graphql', {
    buildFields: ['customView', 'acceptedPermissions', 'projects'],
    addFields: () => ({
      __typename: 'RestrictedCustomViewInstallationForOrganization',
    }),
  }),
};

export default transformers;
