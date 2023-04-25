import { Transformer } from '@commercetools-test-data/core';
import type { TTaxRateDraft, TTaxRateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTaxRateDraft, TTaxRateDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TTaxRateDraft, TTaxRateDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TTaxRateDraft, TTaxRateDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'TaxRateDraft',
    }),
  }),
};

export default transformers;
