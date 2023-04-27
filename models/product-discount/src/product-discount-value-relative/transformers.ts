import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountValueRelative,
  TProductDiscountValueRelativeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelative
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelative
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelativeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ProductDiscountValueRelative',
    }),
  }),
};

export default transformers;
