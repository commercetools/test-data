import { Generator } from '@commercetools-test-data/core';
import { TProjectCustomLimitsProjection } from './types';

const generator = Generator<TProjectCustomLimitsProjection>({
  fields: {
    customers: null,
    customerGroups: null,
    zones: null,
    taxCategories: null,
    shippingMethods: null,
    productDiscounts: null,
    cartDiscounts: null,
    stores: null,
    shoppingLists: null,
    carts: null,
    businessUnits: null,
  },
});

export default generator;
