import { Transformer } from '@/core';
import type {
  TCustomViewPermission,
  TCustomViewPermissionGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomViewPermission, TCustomViewPermission>(
    'default',
    {}
  ),
  graphql: Transformer<TCustomViewPermission, TCustomViewPermissionGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'CustomViewPermission',
      }),
    }
  ),
};

export default transformers;
