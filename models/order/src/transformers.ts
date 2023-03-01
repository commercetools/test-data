import { Transformer } from '@commercetools-test-data/core';
import type { TOrder, TOrderGraphql } from './types';

const transformers = {
  default: Transformer<TOrder, TOrder>('default', {
    buildFields: [],
  }),
  rest: Transformer<TOrder, TOrder>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TOrder, TOrderGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Order',
    }),
  }),
};

export default transformers;
