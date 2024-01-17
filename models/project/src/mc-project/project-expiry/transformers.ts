import { Transformer } from '@commercetools-test-data/core';
import type { TProjectExpiry, TProjectExpiryGraphql } from './types';

const transformers = {
  default: Transformer<TProjectExpiry, TProjectExpiry>('default', {}),
  rest: Transformer<TProjectExpiry, TProjectExpiryGraphql>('rest', {}),
  graphql: Transformer<TProjectExpiry, TProjectExpiryGraphql>('graphql', {
    addFields: () => ({
      __typename: 'ProjectExpiry',
    }),
  }),
};

export default transformers;
