import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { supportedViewOAuthScopes } from './constants';
import type { TCustomApplicationInstallationPermissionGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationInstallationPermissionGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      name: fake((f) => f.lorem.words(1)),
      oAuthScopes: fake((f) =>
        f.helpers.arrayElements(supportedViewOAuthScopes, 2)
      ),
    },
  };
