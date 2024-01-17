import { Transformer } from '@commercetools-test-data/core';
import type { TAppliedPermission, TAppliedPermissionGraphql } from './types';

const transformers = {
  default: Transformer<TAppliedPermission, TAppliedPermission>('default', {}),
  rest: Transformer<TAppliedPermission, TAppliedPermissionGraphql>('rest', {}),
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
