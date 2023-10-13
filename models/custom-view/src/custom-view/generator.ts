import { LocalizedField } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { CustomViewPermission } from '../custom-view-permission';
import { CustomViewTypeSettings } from '../custom-view-type-settings';
import { CustomView } from './types';
import { defaultLocators } from './utils';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<CustomView>({
  fields: {
    createdAt: fake(getOlderDate),
    defaultLabel: fake((f) => f.commerce.department()),
    id: fake((f) => f.string.uuid()),
    installedBy: null, // buildField
    labelAllLocales: [
      LocalizedField.random().build(),
      LocalizedField.random().build(),
    ],
    locators: fake((f) =>
      f.helpers.arrayElements(defaultLocators, {
        min: 0,
        max: defaultLocators.length,
      })
    ),
    ownerId: fake((f) => f.string.uuid()),
    permissions: [
      CustomViewPermission.presets.viewPermission().build(),
      CustomViewPermission.presets.viewPermission().build(),
    ],
    status: fake((f) => f.helpers.arrayElement(['DRAFT', 'PUBLIC'])),
    type: 'CustomPanel',
    typeSettings: fake((f) =>
      CustomViewTypeSettings.presets
        .customViewPanelSettings(f.helpers.arrayElement(['SMALL', 'LARGE']))
        .build()
    ),
    updatedAt: fake(getNewerDate),
    url: fake((f) => f.internet.url()),
  },
});

export default generator;
