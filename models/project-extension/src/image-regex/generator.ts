import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

import type { TImageRegex } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const getImageRegexOption = () => ({
  flag: fake((f) => f.lorem.slug()),
  replace: fake((f) => f.lorem.word()),
  search: fake((f) => f.lorem.word()),
});

const generator = Generator<TImageRegex>({
  fields: {
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    id: fake((f) => f.string.uuid()),
    small: getImageRegexOption(),
    thumb: getImageRegexOption(),
  },
});

export default generator;
