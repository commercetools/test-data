import { Transformer } from '@/core';
import type {
  TCartClassificationPriceTier,
  TCartClassificationPriceTierGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartClassificationPriceTier,
    TCartClassificationPriceTier
  >('default', {
    buildFields: ['value', 'price', 'isMatching'],
  }),
  rest: Transformer<TCartClassificationPriceTier, TCartClassificationPriceTier>(
    'rest',
    {
      buildFields: ['value', 'price', 'isMatching'],
    }
  ),
  graphql: Transformer<
    TCartClassificationPriceTier,
    TCartClassificationPriceTierGraphql
  >('graphql', {
    buildFields: ['value', 'price', 'isMatching'],
  }),
};

export default transformers;
