import { LocalizedString } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import type { TProductTailoringData } from './types';

const generator = Generator<TProductTailoringData>({
  fields: {
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    metaTitle: fake(() => LocalizedString.random()),
    metaDescription: fake(() => LocalizedString.random()),
    metaKeywords: fake(() => LocalizedString.random()),
    variants: fake(() => [
      {
        id: fake((f) => f.number.int({ min: 1 })),
        sku: fake((f) => f.string.uuid()),
        key: fake((f) => f.string.uuid()),
        images: [
          {
            url: fake((f) => f.image.url()),
            dimensions: {
              w: fake((f) => f.number.int({ min: 100, max: 1000 })),
              h: fake((f) => f.number.int({ min: 100, max: 1000 })),
            },
            label: fake((f) => f.commerce.productName()),
          },
        ],
        attributes: [
          {
            name: 'size',
            value: fake((f) => f.helpers.arrayElement(['S', 'M', 'L', 'XL'])),
          },
        ],
      },
    ]),
  },
});

export default generator;
