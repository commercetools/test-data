import { Generator } from '@commercetools-test-data/core';
import sampleSize from 'lodash/sampleSize';
import { supportedViewOAuthScopes } from './constants';
import type { TCustomViewPermission } from './types';

const generator = Generator<TCustomViewPermission>({
  fields: {
    name: 'view',
    oAuthScopes: sampleSize(supportedViewOAuthScopes, 2),
  },
});

export default generator;
