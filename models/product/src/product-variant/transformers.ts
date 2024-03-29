import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeGraphql } from '../attribute';
import type { TProductVariant, TProductVariantGraphql } from './types';

const transformers = {
  default: Transformer<TProductVariant, TProductVariant>('default', {
    buildFields: ['price', 'prices', 'images', 'attributes'],
  }),
  rest: Transformer<TProductVariant, TProductVariant>('rest', {
    buildFields: ['price', 'prices', 'images', 'attributes'],
  }),
  graphql: Transformer<TProductVariant, TProductVariantGraphql>('graphql', {
    buildFields: ['price', 'prices', 'images', 'attributes'],
    replaceFields: ({
      fields: {
        attributes,
        isMatchingVariant,
        scopedPrice,
        scopedPriceDiscounted,
        ...rest
      },
    }) => ({
      ...rest,
      attributesRaw: attributes as Array<TAttributeGraphql>,
      __typename: 'ProductVariant',
    }),
  }),
};

export default transformers;
