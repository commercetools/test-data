import { Transformer } from '@/core';
import type {
  TCartValuePriceTierRest,
  TCartValuePriceTierGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartValuePriceTierRest, TCartValuePriceTierRest>(
    'default',
    {
      buildFields: ['price', 'isMatching', 'minimumCentAmount'],
    }
  ),
  rest: Transformer<TCartValuePriceTierRest, TCartValuePriceTierRest>('rest', {
    buildFields: ['price', 'isMatching', 'minimumCentAmount'],
  }),
  graphql: Transformer<TCartValuePriceTierRest, TCartValuePriceTierGraphql>(
    'graphql',
    {
      buildFields: ['price', 'isMatching', 'minimumCentAmount'],
    }
  ),
};

export default transformers;
