import { Transformer } from '@commercetools-test-data/core';
import type { TIdTokenUserInfo, TIdTokenUserInfoGraphql } from '../types';

const transformers = {
  default: Transformer<TIdTokenUserInfo, TIdTokenUserInfo>('default', {}),
  rest: Transformer<TIdTokenUserInfo, TIdTokenUserInfo>('rest', {}),
  graphql: Transformer<TIdTokenUserInfo, TIdTokenUserInfoGraphql>('graphql', {
    addFields: () => ({
      __typename: 'IdTokenUserInfo',
    }),
  }),
};

export default transformers;
