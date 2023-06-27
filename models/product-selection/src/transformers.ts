import { Transformer } from '@commercetools-test-data/core';
import type { TProductSelection, TProductSelectionGraphql } from './types';

const transformers = {
  default: Transformer<TProductSelection, TProductSelection>('default', {
    buildFields: ['createdBy', 'lastModifiedBy', 'name'],
  }),
  rest: Transformer<TProductSelection, TProductSelection>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy', 'name'],
  }),
  // graphql scaffolding only
  graphql: Transformer<TProductSelection, TProductSelectionGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy', 'name'],
    addFields: () => ({
      __typename: 'ProductSelection',
    }),
  }),
};

export default transformers;
