import { Transformer } from '@commercetools-test-data/core';
import type { TDivisionDraft, TDivisionDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TDivisionDraft, TDivisionDraft>('default', {
    buildFields: ['addresses'],
  }),
  rest: Transformer<TDivisionDraft, TDivisionDraft>('rest', {
    buildFields: ['addresses'],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TDivisionDraft, TDivisionDraftGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
