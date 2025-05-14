import sampleSize from 'lodash/sampleSize';
import { Generator, fake } from '@/core';
import { createRelatedDates } from '@/utils';
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
