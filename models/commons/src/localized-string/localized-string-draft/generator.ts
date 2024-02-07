import { Generator, fake } from '@commercetools-test-data/core';
import type { TLocalizedStringDraft } from '../types';

// https://docs.commercetools.com/api/types#localizedstring
const generator = Generator<TLocalizedStringDraft>({
  fields: {
    de: fake((f) => f.lorem.words(5)),
    en: fake((f) => f.lorem.words(3)),
    fr: fake((f) => f.lorem.words(4)),
  },
});

export default generator;
