import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnit, TBusinessUnitGraphql } from '../types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  graphql: Transformer<TBusinessUnit, TBusinessUnitGraphql>('graphql', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => ({
      ...fields,
      topLevelUnit: {
        ...fields,
      },
      ancestors: [],
      inheritedStores: null,
      __typename: 'BusinessUnit',
    }),
  }),
};

export default transformers;
