import { fake, type TModelFieldsConfig } from '@/core';
import { slugify } from '@/utils';
import { CustomApplicationMenuLinkGraphql } from '../../custom-application-menu-link';
import { CustomApplicationPermissionGraphql } from '../../custom-application-permission';
import { CustomApplicationSubmenuLinkGraphql } from '../../custom-application-submenu-link';

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationDraftGraphql> =
  {
    fields: {
      url: fake((f) => f.internet.url()),
      description: fake((f) => f.lorem.sentence()),
      permissions: fake(() => [
        CustomApplicationPermissionGraphql.presets.ViewOnlyPermissions(),
        CustomApplicationPermissionGraphql.presets.ManageOnlyPermissions(),
      ]),
      icon: '<svg><path fill="#000000" /></svg>',
      name: fake((f) => f.commerce.department()),
      entryPointUriPath: fake((f) => slugify(f.lorem.word())),
      mainMenuLink: fake(() => CustomApplicationMenuLinkGraphql.random()),
      submenuLinks: [fake(() => CustomApplicationSubmenuLinkGraphql.random())],
    },
  };
