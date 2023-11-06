import { Generator, fake } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { supportedViewOAuthScopes } from './constants';
import type { TCustomViewPermission } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomViewPermission>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    name: 'view',
    oAuthScopes: fake((f) =>
      f.helpers.arrayElements(supportedViewOAuthScopes, 2)
    ),
  },
});

export default generator;
