import { Generator } from '@commercetools-test-data/core';
import sampleSize from 'lodash/sampleSize';
import { supportedViewOAuthScopes } from '../custom-view-permission/constants';
import type { TCustomViewInstallationPermission } from './types';

const generator = Generator<TCustomViewInstallationPermission>({
  fields: {
    name: 'view',
    oAuthScopes: sampleSize(supportedViewOAuthScopes, 2),
  },
});

export default generator;
