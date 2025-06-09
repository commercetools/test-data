import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates, slugify } from '@/utils';
import { CustomApplicationStatus } from './constants';
import type { TCustomApplicationGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationGraphql> =
  {
    fields: {
      __typename: 'RestrictedCustomApplicationForOrganization',
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      status: CustomApplicationStatus.Draft,
      name: fake((f) => f.commerce.department()),
      description: fake((f) => f.lorem.sentence()),
      url: fake((f) => f.internet.url()),
      entryPointUriPath: fake((f) => slugify(f.lorem.word())),
      icon: '<svg><path fill="#000000" /></svg>',
      permissions: [],
      mainMenuLink: null,
      submenuLinks: [],
      deployments: [],
    },
  };
