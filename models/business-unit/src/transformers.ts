import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnit } from './types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {}),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {}),
  // TODO: add graphql
  // graphql: Transformer<TBusinessUnit, TBusinessUnitGraphql>('graphql', {}),
};

export default transformers;
