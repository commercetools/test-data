import { Transformer } from '@commercetools-test-data/core';
import type { TProductDraft, TProductDraftGraphql } from './types';

const transformers = {
  default: Transformer<TProductDraft, TProductDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TProductDraft, TProductDraft>('rest', { buildFields: [] }),
  graphql: Transformer<TProductDraft, TProductDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({ __typename: 'MoneyInput' }),
  }),
};

export default transformers;
