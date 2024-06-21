import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { FilterValues } from '@commercetools-test-data/filter-values';
import { TDiscountsCustomViewInput } from '../types';

// https://github.com/commercetools/merchant-center-services/blob/main/packages/settings/lib/schemas/discounts-my-view.graphql

const generator = Generator<TDiscountsCustomViewInput>({
  fields: {
    name: fake(() => LocalizedString.random()),
    table: null,
    search: fake((f) => f.lorem.word()),
    filters: fake(() => FilterValues.random()),
    sort: null,
  },
});

export default generator;
