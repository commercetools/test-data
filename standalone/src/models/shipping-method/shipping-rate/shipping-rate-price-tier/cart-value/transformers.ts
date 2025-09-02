import { Transformer } from '@/core';
import type { TCartValuePriceTier, TCartValuePriceTierGraphql } from './types';

const transformers = {
  default: Transformer<TCartValuePriceTier, TCartValuePriceTier>('default', {
    buildFields: ['minimumCentAmount', 'price'],
  }),
  rest: Transformer<TCartValuePriceTier, TCartValuePriceTier>('rest', {
    buildFields: ['minimumCentAmount', 'price'],
  }),
  graphql: Transformer<TCartValuePriceTier, TCartValuePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['minimumCentAmount', 'price'],
    }
  ),
};

export default transformers;
