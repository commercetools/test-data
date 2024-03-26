import { Generator, fake } from '@commercetools-test-data/core';
import { supportedViewOAuthScopes } from '../custom-application-permission/constants';
import type { TCustomApplicationPermissionDraft } from './types';

const generator = Generator<TCustomApplicationPermissionDraft>({
  fields: {
    name: 'viewAvengers',
    oAuthScopes: fake((f) =>
      f.helpers.arrayElements(supportedViewOAuthScopes, 2)
    ),
  },
});

export default generator;
