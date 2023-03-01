import { Transformer } from '@commercetools-test-data/core';
import type { TProduct, TProductGraphql } from './types';

const transformers = {
  default: Transformer<TProduct, TProduct>('default', {
    buildFields: [],
  }),
  rest: Transformer<TProduct, TProduct>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TProduct, TProductGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Product',
    }),
  }),
};

export default transformers;
