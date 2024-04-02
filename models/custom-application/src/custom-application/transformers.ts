import { Transformer } from '@commercetools-test-data/core';
import type { TCustomApplication, TCustomApplicationGraphql } from './types';

const transformers = {
  default: Transformer<TCustomApplication, TCustomApplication>('default', {
    buildFields: ['permissions', 'mainMenuLink', 'submenuLinks', 'deployments'],
  }),
  graphql: Transformer<TCustomApplication, TCustomApplicationGraphql>(
    'graphql',
    {
      buildFields: [
        'permissions',
        'mainMenuLink',
        'submenuLinks',
        'deployments',
      ],
      addFields: () => ({
        __typename: 'RestrictedCustomApplicationForOrganization',
      }),
    }
  ),
};

export default transformers;
