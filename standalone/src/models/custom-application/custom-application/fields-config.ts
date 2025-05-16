import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates, slugify } from '@/utils';
import { CustomApplicationMenuLinkGraphql } from '../custom-application-menu-link';
import { CustomApplicationPermissionGraphql } from '../custom-application-permission';
import { CustomApplicationSubmenuLinkGraphql } from '../custom-application-submenu-link';
import type { TCustomApplicationGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      status: fake((f) => f.helpers.arrayElement(['DRAFT', 'PRIVATE_USAGE'])),
      name: fake((f) => f.commerce.department()),
      description: fake((f) => f.lorem.sentence()),
      url: fake((f) => f.internet.url()),
      entryPointUriPath: fake((f) => slugify(f.lorem.word())),
      icon: '<svg><path fill="#000000" /></svg>',
      permissions: fake(() => [
        CustomApplicationPermissionGraphql.presets.ViewOnlyPermissions(),
        CustomApplicationPermissionGraphql.presets.ManageOnlyPermissions(),
      ]),
      mainMenuLink: fake(() => CustomApplicationMenuLinkGraphql.random()),
      submenuLinks: [
        fake(() => CustomApplicationSubmenuLinkGraphql.random()),
        fake(() => CustomApplicationSubmenuLinkGraphql.random()),
      ],
      deployments: [],
    },
  };
