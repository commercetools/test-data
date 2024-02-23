import { Transformer } from '@commercetools-test-data/core';
import type { TDivisionDraft, TDivisionDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TDivisionDraft, TDivisionDraft>('default', {
    buildFields: ['addresses', 'associates', 'parentUnit', 'stores'],
  }),
  rest: Transformer<TDivisionDraft, TDivisionDraft>('rest', {
    buildFields: ['addresses', 'associates', 'parentUnit', 'stores'],
  }),
  graphql: Transformer<TDivisionDraft, TDivisionDraftGraphql>('graphql', {
    buildFields: ['addresses', 'associates', 'parentUnit', 'stores'],
  }),
};

export default transformers;
