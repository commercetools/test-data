import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

import type { TImageRegexDraft } from './types';

const getImageRegexOption = () => ({
  flag: fake((f) => f.lorem.slug()),
  replace: fake((f) => f.lorem.word()),
  search: fake((f) => f.lorem.word()),
});

const generator = Generator<TImageRegexDraft>({
  fields: {
    small: getImageRegexOption(),
    thumb: getImageRegexOption(),
  },
});

export default generator;
