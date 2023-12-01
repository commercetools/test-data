import { Generator, fake } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import sampleSize from 'lodash/sampleSize';
import { supportedViewOAuthScopes } from '../custom-view-permission/constants';
import type { TCustomViewInstallationPermission } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomViewInstallationPermission>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    name: 'view',
    oAuthScopes: sampleSize(supportedViewOAuthScopes, 2),
  },
});

export default generator;
