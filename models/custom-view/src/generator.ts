import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { CustomView } from './types';
import { defaultLocators } from './utils';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<CustomView>({
  fields: {
    createdAt: fake(getOlderDate),
    defaultLabel: 'Selling Trend',
    id: fake((f) => f.string.uuid()),
    installedBy: null,
    labelAllLocales: LocalizedString.presets
      .empty()
      .en('Selling Trend')
      .de('Verkaufstrend'),
    locators: fake((f) =>
      f.helpers.arrayElements(defaultLocators, {
        min: 0,
        max: defaultLocators.length,
      })
    ),
    // owner: null,
    ownerId: fake((f) => f.string.uuid()),
    permissions: null,
    status: fake((f) => f.helpers.arrayElement(['DRAFT', 'PUBLIC'])),
    type: 'CustomPanel',
    typeSettings: {
      size: fake((f) => f.helpers.arrayElement(['SMALL', 'LARGE'])),
    },
    updatedAt: fake(getNewerDate),
    url: fake((f) => f.internet.url()),
  },
});

export default generator;
