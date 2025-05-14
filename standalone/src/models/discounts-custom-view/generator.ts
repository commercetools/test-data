import { fake, Generator, oneOf } from '@/core';
import { LocalizedString } from '@/models/commons';
import { FilterValues } from '@/models/filter-values';
import { createRelatedDates } from '@/utils';
import { TDiscountsCustomView } from './types';

const [getCreatedAt, getUpdatedAt] = createRelatedDates();

const generator = Generator<TDiscountsCustomView>({
  fields: {
    id: fake((f) => f.string.uuid()),
    userId: fake((f) => f.string.uuid()),
    projectKey: fake((f) => f.lorem.slug(2)),
    createdAt: fake(getCreatedAt),
    updatedAt: fake(getUpdatedAt),
    isActive: fake((f) => f.datatype.boolean()),
    name: fake(() => LocalizedString.random()),
    table: null,
    search: fake((f) => f.lorem.word()),
    type: oneOf('ProductDiscount', 'CartDiscount', 'DiscountCode'),
    filters: fake(() => [FilterValues.random()]),
    sort: null,
  },
});

export default generator;
