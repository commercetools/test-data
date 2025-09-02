import { Transformer } from '@/core';
import type { TCartScorePriceTier, TCartScorePriceTierGraphql } from './types';

const transformers = {
  default: Transformer<TCartScorePriceTier, TCartScorePriceTier>('default', {
    buildFields: ['score', 'price', 'isMatching', 'priceFunction'],
  }),
  rest: Transformer<TCartScorePriceTier, TCartScorePriceTier>('rest', {
    buildFields: ['score', 'price', 'isMatching', 'priceFunction'],
  }),
  graphql: Transformer<TCartScorePriceTier, TCartScorePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['score', 'price', 'isMatching', 'priceFunction'],
    }
  ),
};

export default transformers;
