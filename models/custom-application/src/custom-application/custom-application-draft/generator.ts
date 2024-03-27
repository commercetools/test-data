import { fake, Generator } from '@commercetools-test-data/core';
import * as CustomViewPermissionDraft from '../../custom-application-permission-draft';
import { TCustomApplicationDraft } from '../types';

const generator = Generator<TCustomApplicationDraft>({
  fields: {
    url: fake((f) => f.internet.url()),
    description: fake((f) => f.lorem.sentence()),
    permissions: fake(() => [
      CustomViewPermissionDraft.presets.ViewOnlyPermissions(),
      CustomViewPermissionDraft.presets.ManageOnlyPermissions(),
    ]),
    icon: '<svg><path fill="#000000" /></svg>',
    name: fake((f) => f.commerce.department()),
    entryPointUriPath: fake((f) => f.lorem.word()),
    mainMenuLink: null,
    submenuLinks: [],
  },
});

export default generator;
