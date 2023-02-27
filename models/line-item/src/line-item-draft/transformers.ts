import { Transformer } from '@commercetools-test-data/core';
import type {
  TLineItemDraft,
  TLineItemDraftGraphql,
  TLineItemDraftRest,
} from '../types';

const transformers = {
  default: Transformer<TLineItemDraft, TLineItemDraft>('default', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
  }),
  rest: Transformer<TLineItemDraft, TLineItemDraftRest>('rest', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
    removeFields: ['productId', 'sku', 'variantId'],
  }),
  graphql: Transformer<TLineItemDraft, TLineItemDraftGraphql>('graphql', {
    buildFields: ['supplyChannel', 'distributionChannel', 'externalPrice'],
    addFields: () => ({ __typename: 'LineItemDraft' }),
  }),
};

export default transformers;
