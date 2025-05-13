import { Transformer } from '@/core';
import type { TCustomObject, TCustomObjectGraphql } from './types';

const transformers = {
  default: Transformer<TCustomObject, TCustomObject>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TCustomObject, TCustomObject>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TCustomObject, TCustomObjectGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'CustomObject',
    }),
  }),
};

export default transformers;
