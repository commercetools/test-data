import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';

import type { TImageRegex } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const getImageRegexOption = () => ({
  flag: fake((f) => f.helpers.arrayElement(['i', 'g', 'm', 'u', 'y'])),
  replace: fake((f) =>
    f.helpers.arrayElement(['.[^.]+$', '\\.jpg$', '\\.png$'])
  ),
  search: fake((f) =>
    f.helpers.arrayElement(['-small.jpg', '-thumbnail.png', '-medium.jpg'])
  ),
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
