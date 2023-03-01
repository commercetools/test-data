import { Transformer } from '@commercetools-test-data/core';
import type { TLineItemDraft, TLineItemDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TLineItemDraft, TLineItemDraft>('default', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
  }),
  rest: Transformer<TLineItemDraft, TLineItemDraft>('rest', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
  }),
  graphql: Transformer<TLineItemDraft, TLineItemDraftGraphql>('graphql', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
    addFields: () => ({ __typename: 'LineItemDraft' }),
  }),
};

export default transformers;
