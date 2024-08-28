/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProjectCustomLimitsProjection } from './types';
import * as ProjectCustomLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'default',
      ProjectCustomLimitsProjection.random(),
      expect.objectContaining({
        customers: expect.any(Object),
        customerGroups: expect.any(Object),
        zones: expect.any(Object),
        taxCategories: expect.any(Object),
        shippingMethods: expect.any(Object),
        productDiscounts: expect.any(Object),
        cartDiscounts: expect.any(Object),
        stores: expect.any(Object),
        carts: expect.any(Object),
        shoppingLists: expect.any(Object),
        businessUnits: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'rest',
      ProjectCustomLimitsProjection.random(),
      expect.objectContaining({
        customers: expect.any(Object),
        customerGroups: expect.any(Object),
        zones: expect.any(Object),
        taxCategories: expect.any(Object),
        shippingMethods: expect.any(Object),
        productDiscounts: expect.any(Object),
        cartDiscounts: expect.any(Object),
        stores: expect.any(Object),
        carts: expect.any(Object),
        shoppingLists: expect.any(Object),
        businessUnits: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'graphql',
      ProjectCustomLimitsProjection.random(),
      expect.objectContaining({
        customers: expect.any(Object),
        customerGroups: expect.any(Object),
        zones: expect.any(Object),
        taxCategories: expect.any(Object),
        shippingMethods: expect.any(Object),
        productDiscounts: expect.any(Object),
        cartDiscounts: expect.any(Object),
        stores: expect.any(Object),
        carts: expect.any(Object),
        shoppingLists: expect.any(Object),
        businessUnits: expect.any(Object),
        __typename: 'ProjectCustomLimitsProjection',
      })
    )
  );
});
