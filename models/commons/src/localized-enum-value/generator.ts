import { fake, Generator } from '@commercetools-test-data/core';
import * as LocalizedString from '../localized-string';
import { TLocalizedEnumValue } from './types';

const generator = Generator<TLocalizedEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(4)),
    label: fake(() => LocalizedString.random()),
  },
});

export default generator;
