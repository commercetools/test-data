import { Transformer } from '../../../../core';
import type {
  TCustomViewInstallation,
  TCustomViewInstallationGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomViewInstallation, TCustomViewInstallation>(
    'default',
    {
      buildFields: ['acceptedPermissions', 'projects'],
    }
  ),
  graphql: Transformer<TCustomViewInstallation, TCustomViewInstallationGraphql>(
    'graphql',
    {
      buildFields: ['acceptedPermissions', 'projects'],
      addFields: () => ({
        __typename: 'CustomViewInstallation',
      }),
    }
  ),
};

export default transformers;
