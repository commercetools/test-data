import { Transformer } from '../../../core';
import type { TOrderFromCartDraft, TOrderFromCartDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TOrderFromCartDraft, TOrderFromCartDraft>('default', {
    buildFields: ['cart', 'state'],
  }),
  rest: Transformer<TOrderFromCartDraft, TOrderFromCartDraft>('rest', {
    buildFields: ['cart', 'state'],
  }),
  graphql: Transformer<TOrderFromCartDraft, TOrderFromCartDraftGraphql>(
    'graphql',
    {
      buildFields: ['cart', 'state'],
    }
  ),
};

export default transformers;
