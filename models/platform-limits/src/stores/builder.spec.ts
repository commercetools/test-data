/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TStoreLimitsProjection } from './types';
import * as StoreLimitsProjection from './index';

const expectedLimit = expect.objectContaining({
  limit: expect.any(Number),
});

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

const expectedResult = {
  total: expectedLimitWithCurrent,
  inventorySupplyChannels: expectedLimit,
  productDistributionChannels: expectedLimit,
};

describe('building', () => {
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'default',
      StoreLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'rest',
      StoreLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<TStoreLimitsProjection, TStoreLimitsProjection>(
      'graphql',
      StoreLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        ...expectedResult,
        __typename: 'StoreLimitsProjection',
      })
    )
  );
});
