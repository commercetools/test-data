import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { CustomViewDraft } from '../types';
import { defaultLocators } from '../utils';

const generator = Generator<CustomViewDraft>({
  fields: {
    defaultLabel: 'Selling Trend',
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
    ownerId: fake((f) => f.string.uuid()),
    permissions: [
      {
        name: 'viewCustomView',
        oAuthScopes: ['view_products'],
      },
      {
        name: 'manageCustomView',
        oAuthScopes: ['manage_products'],
      },
    ],
    status: fake((f) => f.helpers.arrayElement(['DRAFT', 'PUBLIC'])),
    type: 'CustomPanel',
    typeSettings: {
      size: fake((f) => f.helpers.arrayElement(['SMALL', 'LARGE'])),
    },
    url: fake((f) => f.internet.url()),
  },
});

export default generator;
