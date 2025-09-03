import { Transformer } from '@/core';
import type {
  TCartClassificationPriceTierRest,
  TCartClassificationPriceTierGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartClassificationPriceTierRest,
    TCartClassificationPriceTierRest
  >('default', {
    buildFields: ['value', 'price', 'isMatching'],
  }),
  rest: Transformer<
    TCartClassificationPriceTierRest,
    TCartClassificationPriceTierRest
  >('rest', {
    buildFields: ['value', 'price', 'isMatching'],
  }),
  graphql: Transformer<
    TCartClassificationPriceTierRest,
    TCartClassificationPriceTierGraphql
  >('graphql', {
    buildFields: ['value', 'price', 'isMatching'],
  }),
};

export default transformers;
