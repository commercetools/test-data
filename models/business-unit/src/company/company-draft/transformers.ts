import { Transformer } from '@commercetools-test-data/core';
import type { TCompanyDraft, TCompanyDraftGraphql } from '../../types';

const transformers = {
  default: Transformer<TCompanyDraft, TCompanyDraft>('default', {
    buildFields: ['addresses'],
  }),
  rest: Transformer<TCompanyDraft, TCompanyDraft>('rest', {
    buildFields: ['addresses'],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TCompanyDraft, TCompanyDraftGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
