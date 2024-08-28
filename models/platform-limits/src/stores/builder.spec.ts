/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TStoreLimitsProjection } from './types';
import * as StoreLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'default',
      StoreLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        inventorySupplyChannels: expect.any(Object),
        productDistributionChannels: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'rest',
      StoreLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        inventorySupplyChannels: expect.any(Object),
        productDistributionChannels: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'graphql',
      StoreLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        inventorySupplyChannels: expect.any(Object),
        productDistributionChannels: expect.any(Object),
        __typename: 'StoreLimitsProjection',
      })
    )
  );
});
