import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { FilterValues } from '@commercetools-test-data/filter-values';
import type { TDiscountsCustomViewInput } from '../types';

const generator = Generator<TDiscountsCustomViewInput>({
  fields: {
    name: fake(() => LocalizedString.random()),
    table: null,
    search: fake((f) => f.lorem.word()),
    filters: fake(() => [FilterValues.random()]),
    sort: null,
  },
});

export default generator;
