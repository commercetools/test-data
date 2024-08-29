/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartDiscountLimitsProjection } from './types';
import * as CartDiscountsPlatformLimits from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});
describe('building', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'default',
      CartDiscountsPlatformLimits.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'rest',
      CartDiscountsPlatformLimits.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'graphql',
      CartDiscountsPlatformLimits.presets.withLimitAndCurrent(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expectedLimitWithCurrent,
        __typename: 'CartDiscountLimitsProjection',
      })
    )
  );
});
