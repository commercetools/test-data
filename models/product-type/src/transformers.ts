import { Transformer } from '@commercetools-test-data/core';
import type { TProductType, TProductTypeGraphql } from './types';

const transformers = {
  default: Transformer<TProductType, TProductType>('default', {
    buildFields: ['attributes'],
  }),
  rest: Transformer<TProductType, TProductType>('rest', {
    buildFields: ['attributes'],
  }),
  graphql: Transformer<TProductType, TProductTypeGraphql>('graphql', {
    buildFields: ['attributes'],
    addFields: () => ({
      __typename: 'ProductType',
    }),
  }),
};

export default transformers;
