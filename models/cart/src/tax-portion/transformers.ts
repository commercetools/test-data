import { Transformer } from '@commercetools-test-data/core';
import { TTaxPortion, TTaxPortionRest, TTaxPortionGraphql } from './types';

const buildFields: (keyof TTaxPortion)[] = ['amount'];

const transformers = {
  default: Transformer<TTaxPortion, TTaxPortion>('default', {
    buildFields,
  }),
  rest: Transformer<TTaxPortion, TTaxPortionRest>('rest', {
    buildFields,
  }),
  graphql: Transformer<TTaxPortion, TTaxPortionGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'TaxPortion',
    }),
  }),
};

export default transformers;
