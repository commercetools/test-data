import { Transformer } from '@commercetools-test-data/core';
import type { TCompanyDraft } from '../types';

const transformers = {
  default: Transformer<TCompanyDraft, TCompanyDraft>('default', {}),
  rest: Transformer<TCompanyDraft, TCompanyDraft>('rest', {}),
  // TODO: add graphql
  // graphql: Transformer<TCompanyDraft, TCompanyDraftGraphql>('graphql', {}),
};

export default transformers;
