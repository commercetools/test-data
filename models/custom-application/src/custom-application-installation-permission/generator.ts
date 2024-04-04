import { Generator, fake } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import { supportedViewOAuthScopes } from '../custom-application-permission/custom-application-permission/constants';
import type { TCustomApplicationInstallationPermission } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationInstallationPermission>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    name: fake((f) => `view${upperFirst(f.lorem.word())}`),
    oAuthScopes: sampleSize(supportedViewOAuthScopes, 2),
  },
});

export default generator;
