import { Transformer } from '@commercetools-test-data/core';
import type { TMoney, TMoneyGraphql } from './types';

const transformers = {
  default: Transformer<TMoney, TMoney>('default', {
    buildFields: [],
  }),
  rest: Transformer<TMoney, TMoney>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TMoney, TMoneyGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
