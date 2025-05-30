import { Transformer } from '@/core';
import type { TAppliedPermission, TAppliedPermissionGraphql } from './types';

const transformers = {
  default: Transformer<TAppliedPermission, TAppliedPermission>('default', {}),
  rest: Transformer<TAppliedPermission, TAppliedPermission>('rest', {}),
  graphql: Transformer<TAppliedPermission, TAppliedPermissionGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'AppliedPermission',
      }),
    }
  ),
};

export default transformers;
