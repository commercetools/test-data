import { fake, Generator } from '@commercetools-test-data/core';
import type { TOidcSsoConfigDraft } from './types';

const generator = Generator<TOidcSsoConfigDraft>({
  fields: {
    authorityUrl: fake((f) => f.internet.url()),
    clientId: fake((f) => f.string.uuid()),
    clientSecret: fake((f) => f.internet.password()),
    logoutUrl: fake((f) => f.internet.url()),
    sessionTokenExpTimeSeconds: fake((f) =>
      f.number.int({ min: 3600, max: 2505600 })
    ),
    teamIdForNewUsers: fake((f) => f.string.uuid()),
  },
});

export default generator;
