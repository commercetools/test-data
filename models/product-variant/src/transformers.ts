import { Transformer } from '@commercetools-test-data/core';
import type { TProductVariant, TProductVariantGraphql } from './types';

const transformers = {
  default: Transformer<TProductVariant, TProductVariant>('default', {
    // TODO: remember to build `attributes` for all of these
    buildFields: ['price', 'prices', 'images'],
  }),
  rest: Transformer<TProductVariant, TProductVariant>('rest', {
    buildFields: ['price', 'prices', 'images'],
  }),
  graphql: Transformer<TProductVariant, TProductVariantGraphql>('graphql', {
    buildFields: ['price', 'prices', 'images'],
    addFields: () => ({
      // TODO: transform `attributes` to `attributesRaw`
      __typename: 'ProductVariant',
    }),
  }),
};

export default transformers;
