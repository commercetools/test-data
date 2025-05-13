import upperFirst from 'lodash/upperFirst';
import { Generator, fake } from '@/core';
import { createRelatedDates } from '@/utils';
import { supportedViewOAuthScopes } from './constants';
import type { TCustomApplicationPermission } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationPermission>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    name: fake((f) => `view${upperFirst(f.lorem.word())}`),
    oAuthScopes: fake((f) =>
      f.helpers.arrayElements(supportedViewOAuthScopes, 2)
    ),
  },
});

export default generator;
