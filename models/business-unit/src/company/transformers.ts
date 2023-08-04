import { Transformer } from '@commercetools-test-data/core';
import type { TCompany } from './types';

const transformers = {
  default: Transformer<TCompany, TCompany>('default', {
    buildFields: ['addresses'],
  }),
  rest: Transformer<TCompany, TCompany>('rest', { buildFields: ['addresses'] }),
  // CompanyGraphql is not supported at this time.
};

export default transformers;
