import { Transformer } from '@/core';
import type {
  TCartScorePriceTierRest,
  TCartScorePriceTierGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartScorePriceTierRest, TCartScorePriceTierRest>(
    'default',
    {
      buildFields: ['price', 'isMatching', 'score', 'priceFunction'],
    }
  ),
  rest: Transformer<TCartScorePriceTierRest, TCartScorePriceTierRest>('rest', {
    buildFields: ['price', 'isMatching', 'score', 'priceFunction'],
  }),
  graphql: Transformer<TCartScorePriceTierRest, TCartScorePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['price', 'isMatching', 'score', 'priceFunction'],
    }
  ),
};

export default transformers;
