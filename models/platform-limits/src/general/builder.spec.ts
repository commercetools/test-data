/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProjectCustomLimitsProjection } from './types';
import * as ProjectCustomLimitsProjection from './index';

const expectedLimit = expect.objectContaining({
  limit: expect.any(Number),
});

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

const expectedResult = {
  customers: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  customerGroups: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  zones: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  taxCategories: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  shippingMethods: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  productDiscounts: expect.objectContaining({
    totalActive: expectedLimitWithCurrent,
  }),
  cartDiscounts: expect.objectContaining({
    totalActiveWithoutDiscountCodes: expectedLimitWithCurrent,
  }),
  stores: expect.objectContaining({
    total: expectedLimitWithCurrent,
    inventorySupplyChannels: expectedLimit,
    productDistributionChannels: expectedLimit,
  }),
  carts: expect.objectContaining({
    total: expectedLimitWithCurrent,
  }),
  shoppingLists: expect.objectContaining({
    total: expectedLimitWithCurrent,
    lineItems: expectedLimit,
    textLineItems: expectedLimit,
  }),
  businessUnits: expect.objectContaining({
    maxDivisions: expectedLimit,
    maxDepthLimit: expectedLimit,
    maxAssociates: expectedLimit,
    maxAssociateRoles: expectedLimit,
  }),
};
describe('building', () => {
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'default',
      ProjectCustomLimitsProjection.presets.withAllPlatformLimits(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'rest',
      ProjectCustomLimitsProjection.presets.withAllPlatformLimits(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<
      TProjectCustomLimitsProjection,
      TProjectCustomLimitsProjection
    >(
      'graphql',
      ProjectCustomLimitsProjection.presets.withAllPlatformLimits(),
      expect.objectContaining({
        ...expectedResult,
        __typename: 'ProjectCustomLimitsProjection',
      })
    )
  );
});
