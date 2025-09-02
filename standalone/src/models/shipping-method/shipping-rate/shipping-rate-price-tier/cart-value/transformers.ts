import { Transformer } from '@/core';
import type { TCartValuePriceTier, TCartValuePriceTierGraphql } from './types';

const transformers = {
  default: Transformer<TCartValuePriceTier, TCartValuePriceTier>('default', {
    buildFields: ['minimumCentAmount', 'price', 'isMatching'],
  }),
  rest: Transformer<TCartValuePriceTier, TCartValuePriceTier>('rest', {
    buildFields: ['minimumCentAmount', 'price', 'isMatching'],
  }),
  graphql: Transformer<TCartValuePriceTier, TCartValuePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['minimumCentAmount', 'price', 'isMatching'],
    }
  ),
};

export default transformers;
