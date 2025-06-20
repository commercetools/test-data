import { fake, TModelFieldsConfig } from '@/core';
import type { TOidcSsoConfigDraftGraphql } from '../types';

export const graphqlFieldsConfig: TModelFieldsConfig<TOidcSsoConfigDraftGraphql> =
  {
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
  };
