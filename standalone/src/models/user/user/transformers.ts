import { Transformer } from '@/core';
import type { TUser, TUserGraphql } from './types';

const transformers = {
  default: Transformer<TUser, TUser>('default', {}),
  rest: Transformer<TUser, TUser>('rest', {}),
  graphql: Transformer<TUser, TUserGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'User',
    }),
  }),
};

export default transformers;
