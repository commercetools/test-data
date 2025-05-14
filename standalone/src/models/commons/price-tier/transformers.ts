import { Transformer } from '@/core';
import type { TPriceTier, TPriceTierGraphql } from './types';

const transformers = {
  default: Transformer<TPriceTier, TPriceTier>('default', {
    buildFields: ['value'],
  }),
  rest: Transformer<TPriceTier, TPriceTier>('rest', {
    buildFields: ['value'],
  }),
  graphql: Transformer<TPriceTier, TPriceTierGraphql>('graphql', {
    buildFields: ['value'],
    addFields: () => ({
      __typename: 'ProductPriceTier',
    }),
  }),
};

export default transformers;
