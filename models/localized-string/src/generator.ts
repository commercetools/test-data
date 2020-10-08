import type { TLocalizedString } from './types';

import { Generator, fake } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/types#localizedstring
const generator = Generator<TLocalizedString>({
  name: 'LocalizedString',
  fields: {
    de: fake((f) => f.lorem.words(5)),
    en: fake((f) => f.lorem.words(3)),
    fr: fake((f) => f.lorem.words(4)),
  },
});

export default generator;
