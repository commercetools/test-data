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
    buildFields: ['value', 'price'],
  }),
  rest: Transformer<TCartClassificationPriceTier, TCartClassificationPriceTier>(
    'rest',
    {
      buildFields: ['value', 'price'],
    }
  ),
  graphql: Transformer<
    TCartClassificationPriceTier,
    TCartClassificationPriceTierGraphql
  >('graphql', {
    buildFields: ['value', 'price'],
  }),
};

export default transformers;
