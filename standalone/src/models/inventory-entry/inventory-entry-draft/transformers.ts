import { Transformer } from '@/core';
import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftRest,
  TInventoryEntryDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TInventoryEntryDraft, TInventoryEntryDraft>('default', {
    buildFields: ['supplyChannel'],
  }),
  rest: Transformer<TInventoryEntryDraft, TInventoryEntryDraftRest>('rest', {
    buildFields: ['supplyChannel'],
  }),
  graphql: Transformer<TInventoryEntryDraft, TInventoryEntryDraftGraphql>(
    'graphql',
    {
      buildFields: ['supplyChannel'],
    }
  ),
};

export default transformers;
