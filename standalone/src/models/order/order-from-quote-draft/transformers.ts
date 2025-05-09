import { Transformer } from '../../../core';
import type {
  TOrderFromQuoteDraft,
  TOrderFromQuoteDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TOrderFromQuoteDraft, TOrderFromQuoteDraft>('default', {
    buildFields: ['quote', 'state'],
  }),
  rest: Transformer<TOrderFromQuoteDraft, TOrderFromQuoteDraft>('rest', {
    buildFields: ['quote', 'state'],
  }),
  graphql: Transformer<TOrderFromQuoteDraft, TOrderFromQuoteDraftGraphql>(
    'graphql',
    {
      buildFields: ['quote', 'state'],
    }
  ),
};

export default transformers;
