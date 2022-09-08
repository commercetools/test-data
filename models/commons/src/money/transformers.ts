import { Transformer } from '@commercetools-test-data/core';
import type { TMoney, TMoneyGraphql } from './types';

const transformers = {
  default: Transformer<TMoney, TMoney>('default', {}),
  rest: Transformer<TMoney, TMoney>('rest', {}),
  graphql: Transformer<TMoney, TMoneyGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Money',
    }),
  }),
};

export default transformers;
