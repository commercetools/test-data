import { Transformer } from '../../../../core';
import type { TOrganization, TOrganizationGraphql } from './types';

const transformers = {
  default: Transformer<TOrganization, TOrganization>('default', {
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
