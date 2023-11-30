import { Transformer } from '@commercetools-test-data/core';
import type { TCustomObject, TCustomObjectGraphql } from './types';

const transformers = {
  default: Transformer<TCustomObject, TCustomObject>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TCustomObject, TCustomObject>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TCustomObject, TCustomObjectGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'CustomObject',
    }),
  }),
};

export default transformers;
