import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountValueAbsolute,
  TProductDiscountValueAbsoluteGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProductDiscountValueAbsolute,
    TProductDiscountValueAbsolute
  >('default', {
    buildFields: ['money'],
  }),
  rest: Transformer<
    TProductDiscountValueAbsolute,
    TProductDiscountValueAbsolute
  >('rest', {
    buildFields: ['money'],
  }),
  graphql: Transformer<
    TProductDiscountValueAbsolute,
    TProductDiscountValueAbsoluteGraphql
  >('graphql', {
    buildFields: ['money'],
    addFields: () => ({
      __typename: 'AbsoluteDiscountValue',
    }),
  }),
};

export default transformers;
