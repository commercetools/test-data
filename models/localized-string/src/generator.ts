import type { TLocalizedString } from './types';

import { Generator, fake } from '@commercetools-test-data/core';

/**
 * A localized string is a JSON object where the keys are of ↗ IETF language tag,
 * and the values the corresponding strings used for that language.
 */
const generator = Generator<TLocalizedString>({
  name: 'LocalizedString',
  fields: {
    de: fake((f) => f.lorem.words(5)),
    en: fake((f) => f.lorem.words(3)),
    fr: fake((f) => f.lorem.words(4)),
  },
});

export default generator;
