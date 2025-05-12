import { Transformer } from '../../../core';
import type { TCustomApplication, TCustomApplicationGraphql } from './types';

const transformers = {
  default: Transformer<TCustomApplication, TCustomApplication>('default', {
    buildFields: ['permissions', 'mainMenuLink', 'submenuLinks'],
  }),
  graphql: Transformer<TCustomApplication, TCustomApplicationGraphql>(
    'graphql',
    {
      buildFields: ['permissions', 'mainMenuLink', 'submenuLinks'],
      addFields: () => ({
        __typename: 'RestrictedCustomApplicationForOrganization',
      }),
    }
  ),
};

export default transformers;
