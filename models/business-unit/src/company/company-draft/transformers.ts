import { Transformer } from '@commercetools-test-data/core';
import type { TCompanyDraft } from '../types';

const transformers = {
  default: Transformer<TCompanyDraft, TCompanyDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCompanyDraft, TCompanyDraft>('rest', { buildFields: [] }),
  // CompanyDraftGraphql is not supported at this time.
};

export default transformers;
