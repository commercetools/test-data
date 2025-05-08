import { Transformer } from '../../../core';
import type {
  TStagedStandalonePrice,
  TStagedStandalonePriceGraphql,
} from './types';

const transformers = {
  default: Transformer<TStagedStandalonePrice, TStagedStandalonePrice>(
    'default',
    {
      buildFields: ['value', 'discounted'],
    }
  ),
  rest: Transformer<TStagedStandalonePrice, TStagedStandalonePrice>('rest', {
    buildFields: ['value', 'discounted'],
  }),
  graphql: Transformer<TStagedStandalonePrice, TStagedStandalonePriceGraphql>(
    'graphql',
    {
      buildFields: ['value', 'discounted'],
    }
  ),
};

export default transformers;
