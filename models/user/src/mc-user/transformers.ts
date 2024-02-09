import { Transformer } from '@commercetools-test-data/core';
import type { TMcUser, TMcUserGraphql } from './types';

const transformers = {
  default: Transformer<TMcUser, TMcUser>('default', {
    buildFields: ['idTokenUserInfo'],
  }),
  rest: Transformer<TMcUser, TMcUser>('rest', {
    buildFields: ['idTokenUserInfo'],
  }),
  graphql: Transformer<TMcUser, TMcUserGraphql>('graphql', {
    buildFields: ['idTokenUserInfo'],
    addFields: () => ({
      __typename: 'User',
    }),
  }),
};

export default transformers;
