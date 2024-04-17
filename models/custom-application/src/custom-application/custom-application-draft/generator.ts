import { fake, Generator } from '@commercetools-test-data/core';
import { slugify } from '@commercetools-test-data/utils';
import { CustomApplicationMenuLinkDraft } from '../../custom-application-menu-link';
import { CustomApplicationPermissionDraft } from '../../custom-application-permission';
import { CustomApplicationSubmenuLinkDraft } from '../../custom-application-submenu-link';
import type { TCustomApplicationDraft } from '../types';

const generator = Generator<TCustomApplicationDraft>({
  fields: {
    url: fake((f) => f.internet.url()),
    description: fake((f) => f.lorem.sentence()),
    permissions: fake(() => [
      CustomApplicationPermissionDraft.presets.ViewOnlyPermissions(),
      CustomApplicationPermissionDraft.presets.ManageOnlyPermissions(),
    ]),
    icon: '<svg><path fill="#000000" /></svg>',
    name: fake((f) => f.commerce.department()),
    entryPointUriPath: fake((f) => slugify(f.lorem.word())),
    mainMenuLink: fake(() => CustomApplicationMenuLinkDraft.random()),
    submenuLinks: [fake(() => CustomApplicationSubmenuLinkDraft.random())],
  },
});

export default generator;
