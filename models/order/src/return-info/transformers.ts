import { Transformer } from '@commercetools-test-data/core';
import type { TReturnInfo, TReturnInfoGraphql } from './types';

const transformers = {
  default: Transformer<TReturnInfo, TReturnInfo>('default', {
    buildFields: ['items'],
  }),
  rest: Transformer<TReturnInfo, TReturnInfo>('rest', {
    buildFields: ['items'],
  }),
  graphql: Transformer<TReturnInfo, TReturnInfoGraphql>('graphql', {
    buildFields: ['items'],
    addFields: () => ({
      __typename: 'ReturnInfo',
    }),
  }),
};

export default transformers;
