import { fake, Generator } from '@/core';
import type { TCategoryRecommendationSettingsDraft } from './types';

const generator = Generator<TCategoryRecommendationSettingsDraft>({
  fields: {
    searchProperty: fake((f) =>
      f.helpers.arrayElement(['Attribute', 'ProductType'])
    ),
    attributeName: fake((f) => f.lorem.word()),
  },
});

export default generator;
