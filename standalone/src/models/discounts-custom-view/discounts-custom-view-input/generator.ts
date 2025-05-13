import { fake, Generator } from '@/core';
import { LocalizedString } from '@/models/commons';
import { FilterValues } from '@/models/filter-values';
import { TDiscountsCustomViewInput } from '../types';

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
