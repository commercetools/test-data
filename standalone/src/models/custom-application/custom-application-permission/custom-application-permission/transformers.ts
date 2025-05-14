import { Transformer } from '@/core';
import type {
  TCustomApplicationPermission,
  TCustomApplicationPermissionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationPermission,
    TCustomApplicationPermission
  >('default', {}),
  graphql: Transformer<
    TCustomApplicationPermission,
    TCustomApplicationPermissionGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomApplicationPermission',
    }),
  }),
};

export default transformers;
