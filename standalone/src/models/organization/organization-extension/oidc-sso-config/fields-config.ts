import { fake, TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import type { TOidcSsoConfigGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TOidcSsoConfigGraphql> = {
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    isActive: fake(() => false),
    authorityUrl: fake((f) => f.internet.url()),
    clientId: fake((f) => f.string.uuid()),
    clientSecret: null,
    teamIdForNewUsers: null,
    logoutUrl: null,
    sessionTokenExpTimeSeconds: null,
    hasClientSecret: fake(() => false),
    __typename: 'OidcSsoConfig',
  },
};
