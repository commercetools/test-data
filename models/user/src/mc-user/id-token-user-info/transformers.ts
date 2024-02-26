import { Transformer } from '@commercetools-test-data/core';
import type { TMcIdTokenUserInfo, TMcIdTokenUserInfoGraphql } from '../types';

const transformers = {
  default: Transformer<TMcIdTokenUserInfo, TMcIdTokenUserInfo>('default', {}),
  rest: Transformer<TMcIdTokenUserInfo, TMcIdTokenUserInfo>('rest', {}),
  graphql: Transformer<TMcIdTokenUserInfo, TMcIdTokenUserInfoGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'IdTokenUserInfo',
      }),
    }
  ),
};

export default transformers;
