import { fake, Generator } from '@commercetools-test-data/core';
import { CustomApplicationMenuLinkDraft } from '../../custom-application-menu-link';
import * as CustomApplicationPermissionDraft from '../../custom-application-permission/custom-application-permission-draft';
import { TCustomApplicationDraft } from '../types';

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
    entryPointUriPath: fake((f) => f.lorem.word()),
    mainMenuLink: fake(() => CustomApplicationMenuLinkDraft.random()),
    submenuLinks: [],
  },
});

export default generator;
