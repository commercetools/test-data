import { Transformer } from '../../../../core';
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
  }),
};

export default transformers;
