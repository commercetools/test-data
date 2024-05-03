import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TOidcSsoConfig } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TOidcSsoConfig>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    authorityUrl: fake((f) => f.internet.url()),
    clientId: fake((f) => f.string.uuid()),
    clientSecret: fake((f) => f.internet.password()),
    isActive: fake((f) => f.datatype.boolean()),
    logoutUrl: fake((f) => f.internet.url()),
    sessionTokenExpTimeSeconds: fake((f) => f.number.int()),
    teamIdForNewUsers: fake((f) => f.string.uuid()),
  },
});

export default generator;
