/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TShippingMethodLimitsProjection } from './types';
import * as ShippingMethodLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

describe('building', () => {
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'default',
      ShippingMethodLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'rest',
      ShippingMethodLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'graphql',
      ShippingMethodLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
        __typename: 'ShippingMethodLimitsProjection',
      })
    )
  );
});
