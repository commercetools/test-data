import { Transformer } from '@commercetools-test-data/core';
import type { TCompany } from './types';

const transformers = {
  default: Transformer<TCompany, TCompany>('default', {}),
  rest: Transformer<TCompany, TCompany>('rest', {}),
  // TODO: add graphql
  // graphql: Transformer<TCompany, TCompanyGraphql>('graphql', {}),
};

export default transformers;
