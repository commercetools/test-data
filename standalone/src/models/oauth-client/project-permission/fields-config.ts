import { fake, type TModelFieldsConfig } from '@/core';
import type { TProjectPermissionGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TProjectPermissionGraphql> =
  {
    fields: {
      key: fake((f) => f.lorem.word()),
      projectKey: null,
      storeKey: null,
      __typename: 'ProjectPermission',
    },
  };
