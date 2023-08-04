import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnit, TBusinessUnitGraphql } from './types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TBusinessUnit, TBusinessUnitGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
