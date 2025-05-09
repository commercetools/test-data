import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';

import type { TCategoryRecommendationSettings } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCategoryRecommendationSettings>({
  fields: {
    createdAt: fake(getOlderDate),
    id: fake((f) => f.string.uuid()),
    updatedAt: fake(getNewerDate),
    searchProperty: fake((f) =>
      f.helpers.arrayElement(['Attribute', 'ProductType'])
    ),
    attributeName: fake((f) => f.lorem.word()),
  },
});

export default generator;
