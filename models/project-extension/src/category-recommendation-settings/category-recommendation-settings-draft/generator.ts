import { fake, Generator } from '@commercetools-test-data/core';
import type { TCategoryRecommendationSettingsDraft } from './types';

const generator = Generator<TCategoryRecommendationSettingsDraft>({
  fields: {
    searchProperty: fake((f) => f.lorem.slug()),
    attributeName: fake((f) => f.lorem.word()),
  },
});

export default generator;
