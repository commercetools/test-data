import { Transformer } from '../../../core';
import type {
  TCustomApplicationInstallationPermission,
  TCustomApplicationInstallationPermissionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationInstallationPermission,
    TCustomApplicationInstallationPermission
  >('default', {}),
  graphql: Transformer<
    TCustomApplicationInstallationPermission,
    TCustomApplicationInstallationPermissionGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomApplicationInstallationPermission',
    }),
  }),
};

export default transformers;
