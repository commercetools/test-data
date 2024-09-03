import { Transformer } from '@commercetools-test-data/core';
import type { TReturnInfo, TReturnInfoGraphql } from './types';

const transformers = {
  default: Transformer<TReturnInfo, TReturnInfo>('default', {
    buildFields: [],
  }),
  rest: Transformer<TReturnInfo, TReturnInfo>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TReturnInfo, TReturnInfoGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ReturnInfo',
    }),
  }),
};

export default transformers;
