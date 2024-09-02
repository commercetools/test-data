/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDiscountLimitsProjection } from './types';
import * as ProductDiscountLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

describe('building', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'default',
      ProductDiscountLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActive: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'rest',
      ProductDiscountLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActive: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'graphql',
      ProductDiscountLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActive: expectedLimitWithCurrent,
        __typename: 'ProductDiscountLimitsProjection',
      })
    )
  );
});
