import { Transformer } from '@commercetools-test-data/core';
import type { TPriceTierDraft, TPriceTierDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TPriceTierDraft, TPriceTierDraft>('default', {
    buildFields: ['value'],
  }),
  rest: Transformer<TPriceTierDraft, TPriceTierDraft>('rest', {
    buildFields: ['value'],
  }),
  graphql: Transformer<TPriceTierDraft, TPriceTierDraftGraphql>('graphql', {
    buildFields: ['value'],
    addFields: () => ({ __typename: 'ProductPriceTierInput' }),
  }),
};

export default transformers;
