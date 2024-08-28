import { Transformer } from '@commercetools-test-data/core';
import { TLimitWithCurrent, TLimitWithCurrentGraphql } from './types';

const transformers = {
  graphql: Transformer<TLimitWithCurrent, TLimitWithCurrentGraphql>('graphql', {
    addFields: () => ({
      __typename: 'LimitWithCurrent',
    }),
  }),
};

export default transformers;
