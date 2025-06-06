import { Transformer } from '@/core';
import type { TCompanyDraft, TCompanyDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCompanyDraft, TCompanyDraft>('default', {
    buildFields: ['addresses', 'associates', 'stores'],
  }),
  rest: Transformer<TCompanyDraft, TCompanyDraft>('rest', {
    buildFields: ['addresses', 'associates', 'stores'],
  }),
  graphql: Transformer<TCompanyDraft, TCompanyDraftGraphql>('graphql', {
    buildFields: ['addresses', 'associates', 'stores'],
    removeFields: ['status'],
  }),
};

export default transformers;
