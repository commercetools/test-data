import { Generator } from '@commercetools-test-data/core';
import { supportedViewOAuthScopes } from '@commercetools-test-data/custom-view';
import sampleSize from 'lodash/sampleSize';
import type { TCustomViewInstallationPermission } from './types';

const generator = Generator<TCustomViewInstallationPermission>({
  fields: {
    name: 'view',
    oAuthScopes: sampleSize(supportedViewOAuthScopes, 2),
  },
});

export default generator;
