import { Transformer } from '@commercetools-test-data/core';
import type { TOrganization, TOrganizationGraphql } from './types';

const transformers = {
  default: Transformer<TOrganization, TOrganization>('default', {
    buildFields: ['teams'],
  }),
  rest: Transformer<TOrganization, TOrganization>('rest', {
    buildFields: ['teams'],
  }),
  graphql: Transformer<TOrganization, TOrganizationGraphql>('graphql', {
    buildFields: ['teams'],
    addFields: () => ({
      __typename: 'Organization',
    }),
  }),
};

export default transformers;
