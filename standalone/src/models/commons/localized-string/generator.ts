import { Generator, fake } from '@/core';
import type { TLocalizedString } from './types';

// https://docs.commercetools.com/api/types#localizedstring
const generator = Generator<TLocalizedString>({
  fields: {
    de: fake((f) => f.lorem.words(5)),
    en: fake((f) => f.lorem.words(3)),
    fr: fake((f) => f.lorem.words(4)),
  },
});

export default generator;
