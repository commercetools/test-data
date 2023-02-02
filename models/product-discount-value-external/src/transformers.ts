import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountValueExternal,
  TProductDiscountValueExternalGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProductDiscountValueExternal,
    TProductDiscountValueExternal
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TProductDiscountValueExternal,
    TProductDiscountValueExternal
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TProductDiscountValueExternal,
    TProductDiscountValueExternalGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ProductDiscountValueExternal',
    }),
  }),
};

export default transformers;
