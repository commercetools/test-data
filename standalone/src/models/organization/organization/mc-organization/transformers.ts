import { Transformer } from '../../../../core';
import type { TMcOrganization, TMcOrganizationGraphql } from './types';

const transformers = {
  default: Transformer<TMcOrganization, TMcOrganization>('default', {}),
  graphql: Transformer<TMcOrganization, TMcOrganizationGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Organization',
    }),
  }),
};

export default transformers;
