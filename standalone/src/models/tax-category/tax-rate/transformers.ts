import { Transformer } from '@/core';
import type { TTaxRate, TTaxRateGraphql } from './types';

const transformers = {
  default: Transformer<TTaxRate, TTaxRate>('default', {
    buildFields: [],
  }),
  rest: Transformer<TTaxRate, TTaxRate>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TTaxRate, TTaxRateGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'TaxRate',
    }),
  }),
};

export default transformers;
