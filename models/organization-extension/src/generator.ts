import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TOrganizationExtension } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TOrganizationExtension>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
  },
});

export default generator;
