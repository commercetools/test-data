import { Transformer } from '@commercetools-test-data/core';
import type {
  TStagedStandalonePrice,
  TStagedStandalonePriceGraphql,
} from './types';

const transformers = {
  default: Transformer<TStagedStandalonePrice, TStagedStandalonePrice>(
    'default',
    {
      buildFields: ['value'],
    }
  ),
  rest: Transformer<TStagedStandalonePrice, TStagedStandalonePrice>('rest', {
    buildFields: ['value'],
  }),
  graphql: Transformer<TStagedStandalonePrice, TStagedStandalonePriceGraphql>(
    'graphql',
    {
      buildFields: ['value'],
    }
  ),
};

export default transformers;