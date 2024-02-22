import { Transformer } from '@commercetools-test-data/core';
import type { TMcUser, TMcUserGraphql } from './types';

const buildFields: (keyof TMcUser)[] = ['idTokenUserInfo', 'projects'];

const transformers = {
  default: Transformer<TMcUser, TMcUser>('default', {
    buildFields,
  }),
  rest: Transformer<TMcUser, TMcUser>('rest', {
    buildFields,
  }),
  graphql: Transformer<TMcUser, TMcUserGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'User',
    }),
  }),
};

export default transformers;
