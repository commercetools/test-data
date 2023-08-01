import { Transformer } from '@commercetools-test-data/core';
import type { TStore, TStoreGraphql } from './types';

const transformers = {
  default: Transformer<TStore, TStore>('default', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
  }),
  rest: Transformer<TStore, TStore>('rest', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
  }),
  graphql: Transformer<TStore, TStoreGraphql>('graphql', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
  }),
};

export default transformers;
