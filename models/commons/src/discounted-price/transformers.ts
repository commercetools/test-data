import { Transformer } from '@commercetools-test-data/core';
import type { TDiscountedPrice, TDiscountedPriceGraphql } from './types';

const transformers = {
  default: Transformer<TDiscountedPrice, TDiscountedPrice>('default', {
    buildFields: ['discount', 'value'],
  }),
  rest: Transformer<TDiscountedPrice, TDiscountedPrice>('rest', {
    buildFields: ['discount', 'value'],
  }),
  graphql: Transformer<TDiscountedPrice, TDiscountedPriceGraphql>('graphql', {
    buildFields: ['discount', 'value'],
    addFields: () => ({
      __typename: 'DiscountedPrice',
    }),
  }),
};

export default transformers;
