import { Transformer } from '@/core';
import type { TCartScorePriceTier, TCartScorePriceTierGraphql } from './types';

const transformers = {
  default: Transformer<TCartScorePriceTier, TCartScorePriceTier>('default', {
    buildFields: ['score', 'price'],
  }),
  rest: Transformer<TCartScorePriceTier, TCartScorePriceTier>('rest', {
    buildFields: ['score', 'price'],
  }),
  graphql: Transformer<TCartScorePriceTier, TCartScorePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['score', 'price'],
    }
  ),
};

export default transformers;
