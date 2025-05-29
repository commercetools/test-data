import { Generator, fake } from '@/core';
import { supportedViewOAuthScopes } from '../custom-view-permission/constants';
import type { TCustomViewPermissionDraft } from './types';

const generator = Generator<TCustomViewPermissionDraft>({
  fields: {
    name: 'view',
    oAuthScopes: fake((f) =>
      f.helpers.arrayElements(supportedViewOAuthScopes, 2)
    ),
  },
});

export default generator;
