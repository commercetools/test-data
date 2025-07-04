import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { ProjectPermissionGraphql } from '../project-permission';
import type { TOAuthClientGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TOAuthClientGraphql> = {
  fields: {
    createdAt: fake(getOlderDate),
    id: fake((f) => f.string.uuid()),
    lastUsedAt: fake(getNewerDate),
    name: fake((f) => f.lorem.words(2)),
    ownerId: fake((f) => f.string.uuid()),
    permissions: fake(() => [
      ProjectPermissionGraphql.random(),
      ProjectPermissionGraphql.random(),
    ]),
    secret: fake((f) => f.internet.password({ length: 24 })),
    __typename: 'OAuthClient',
  },
};
