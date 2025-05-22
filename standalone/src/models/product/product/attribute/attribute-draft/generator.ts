import { fake, Generator } from '@/core';
import type { TAttributeDraft } from '../types';

/**
 * This model does not have a corresponding REST entity,
 * as `AttributeDraft` doesn't exist.
 *
 * It's been created specifically for GraphQL transformations
 * when needing `ProductAttributeInput`.
 */
const generator = Generator<TAttributeDraft>({
  fields: {
    name: fake((f) => f.lorem.slug(3)),
    value: null,
  },
});

export default generator;
