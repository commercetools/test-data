import { LocalizedField } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as CustomViewPermissionDraft from '../../custom-view-permission-draft';
import * as CustomViewTypeSettings from '../../custom-view-type-settings-for-custom-panel';
import { defaultLocators } from '../constants';
import type { TCustomViewDraft } from '../types';

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
      CustomViewPermissionDraft.presets.ViewOnlyPermissions(),
      CustomViewPermissionDraft.presets.ManageOnlyPermissions(),
    ]),
    type: fake((f) => f.helpers.arrayElement(['CustomPanel'])),
    typeSettings: fake(() => CustomViewTypeSettings.random()),
  },
});

export default generator;
