import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

import type { TCategoryRecommendationSettings } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCategoryRecommendationSettings>({
  fields: {
    createdAt: fake(getOlderDate),
    id: fake((f) => f.string.uuid()),
    updatedAt: fake(getNewerDate),
    searchProperty: fake((f) => f.lorem.slug()),
    attributeName: fake((f) => f.lorem.word()),
  },
});

export default generator;
