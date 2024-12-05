import { Transformer } from '@commercetools-test-data/core';
import { TLimit, TLimitGraphql } from './types';

const transformers = {
  graphql: Transformer<TLimit, TLimitGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Limit',
    }),
  }),
};

export default transformers;
