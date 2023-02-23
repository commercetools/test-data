import { Transformer } from '@commercetools-test-data/core';
import type { TProductVariant, TProductVariantGraphql } from './types';

const transformers = {
  default: Transformer<TProductVariant, TProductVariant>('default', {
    buildFields: [],
  }),
  rest: Transformer<TProductVariant, TProductVariant>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TProductVariant, TProductVariantGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ProductVariant',
    }),
  }),
};

export default transformers;
