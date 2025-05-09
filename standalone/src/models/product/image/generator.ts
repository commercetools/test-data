import { fake, Generator } from '../../../core';
import type { TImage } from './types';

// https://docs.commercetools.com/api/projects/products#image

const generator = Generator<TImage>({
  fields: {
    label: fake((f) => f.lorem.slug(2)),
    url: fake((f) => f.image.url()),
    dimensions: {
      w: fake((f) => f.number.int({ min: 150, max: 300 })),
      h: fake((f) => f.number.int({ min: 150, max: 300 })),
    },
  },
});

export default generator;
