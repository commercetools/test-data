import { LocalizedField } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as CustomViewPermission from '../../custom-view-permission';
import * as CustomViewTypeSettings from '../../custom-view-type-settings-for-custom-panel';
import { TCustomViewDraft } from '../types';
import { defaultLocators } from '../utils';

const generator = Generator<TCustomViewDraft>({
  fields: {
    url: fake((f) => f.internet.url()),
    defaultLabel: fake((f) => f.commerce.department()),
    labelAllLocales: fake(() => [LocalizedField.random()]),
    description: null,
    locators: fake((f) =>
      f.helpers.arrayElements(defaultLocators, {
        min: 1,
        max: defaultLocators.length,
      })
    ),
    permissions: fake(() => [
      CustomViewPermission.presets.ViewOnlyPermissions(),
      CustomViewPermission.presets.ManageOnlyPermissions(),
    ]),
    status: 'DRAFT',
    type: fake((f) => f.helpers.arrayElement(['CustomPanel'])),
    typeSettings: fake((f) => CustomViewTypeSettings.random()),
  },
});

export default generator;
