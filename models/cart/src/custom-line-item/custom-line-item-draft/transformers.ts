import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomLineItemDraft,
  TCustomLineItemDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TCustomLineItemDraft, TCustomLineItemDraft>('default', {
    buildFields: ['money', 'name'],
  }),
  rest: Transformer<TCustomLineItemDraft, TCustomLineItemDraft>('rest', {
    buildFields: ['money', 'name'],
  }),
  //scaffolding only
  graphql: Transformer<TCustomLineItemDraft, TCustomLineItemDraftGraphql>(
    'graphql',
    { buildFields: ['money', 'name'] }
  ),
};

export default transformers;
