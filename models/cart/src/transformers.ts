import { Transformer } from '@commercetools-test-data/core';
import type { TCart, TCartGraphql } from './types';

const transformers = {
  default: Transformer<TCart, TCart>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCart, TCart>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCart, TCartGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Cart',
    }),
  }),
};

export default transformers;
