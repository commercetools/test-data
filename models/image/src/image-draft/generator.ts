import { fake, Generator } from '@commercetools-test-data/core';
import { TImageDraft } from '../types';

/**
 * This model does not have a corresponding REST entity,
 * as `ImageDraft` doesn't exist.
 *
 * It's been created specifically for GraphQL transformations
 * when needing `ImageInput`.
 */

const generator = Generator<TImageDraft>({
  fields: {
    url: fake((f) => f.image.abstract()),
    label: fake((f) => f.lorem.slug(2)),
    dimensions: {
      w: fake((f) => f.datatype.number({ min: 150, max: 300 })),
      h: fake((f) => f.datatype.number({ min: 150, max: 300 })),
    },
  },
});

export default generator;
