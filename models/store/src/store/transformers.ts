import { Transformer } from '@commercetools-test-data/core';
import type { TStore, TStoreGraphql } from './types';

const transformers = {
  default: Transformer<TStore, TStore>('default', {
    buildFields: [],
  }),
  rest: Transformer<TStore, TStore>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TStore, TStoreGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
