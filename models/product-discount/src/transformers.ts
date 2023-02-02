import { Transformer } from '@commercetools-test-data/core';
import type { TProductDiscount, TProductDiscountGraphql } from './types';

const transformers = {
  default: Transformer<TProductDiscount, TProductDiscount>('default', {
    buildFields: [],
  }),
  rest: Transformer<TProductDiscount, TProductDiscount>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TProductDiscount, TProductDiscountGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ProductDiscount',
    }),
  }),
};

export default transformers;
