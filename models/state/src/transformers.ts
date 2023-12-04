import { Transformer } from '@commercetools-test-data/core';
import type { TState, TStateGraphql } from './types';

const transformers = {
  default: Transformer<TState, TState>('default', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'transitions',
    ],
  }),
  rest: Transformer<TState, TState>('rest', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'transitions',
    ],
  }),
  // Note that the State graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TState, TStateGraphql>('graphql', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'transitions',
    ],
    addFields: () => ({
      __typename: 'State',
    }),
  }),
};

export default transformers;
