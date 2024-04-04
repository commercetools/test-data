import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CustomApplicationDeploymentPreview from '../custom-application-deployment-preview';
import * as CustomApplicationMenuLink from '../custom-application-menu-link';
import * as CustomApplicationPermission from '../custom-application-permission/custom-application-permission';
import * as CustomApplicationSubmenuLink from '../custom-application-submenu-link';

import type { TCustomApplication } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const generator = Generator<TCustomApplication>({
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
      CustomApplicationPermission.presets.ViewOnlyPermissions(),
      CustomApplicationPermission.presets.ManageOnlyPermissions(),
    ]),
    mainMenuLink: fake(() => CustomApplicationMenuLink.random()),
    submenuLinks: [
      fake(() => CustomApplicationSubmenuLink.random()),
      fake(() => CustomApplicationSubmenuLink.random()),
    ],
    deployments: [fake(() => CustomApplicationDeploymentPreview.random())],
  },
});

export default generator;
