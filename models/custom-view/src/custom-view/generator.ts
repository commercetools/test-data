import { LocalizedField } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CustomViewPermission from '../custom-view-permission';
import * as CustomViewTypeSettingsForCustomPanel from '../custom-view-type-settings-for-custom-panel';
import { defaultLocators } from './constants';
import { TCustomView } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomView>({
  fields: {
    id: fake((f) => f.string.uuid()),
    ownerId: fake((f) => f.string.uuid()),
    url: fake((f) => f.internet.url()),
    defaultLabel: fake((f) => f.commerce.department()),
    labelAllLocales: fake(() => [LocalizedField.random()]),
    description: null,
    locators: fake((f) =>
      f.helpers.arrayElements(defaultLocators, {
        min: 1,
        max: 4,
      })
    ),
    permissions: fake(() => [
      CustomViewPermission.presets.ViewOnlyPermissions(),
      CustomViewPermission.presets.ManageOnlyPermissions(),
    ]),
    status: fake((f) => f.helpers.arrayElement(['DRAFT', 'PRIVATE_USAGE'])),
    type: fake((f) => f.helpers.arrayElement(['CustomPanel'])),
    typeSettings: fake((f) => CustomViewTypeSettingsForCustomPanel.random()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
  },
});

export default generator;
