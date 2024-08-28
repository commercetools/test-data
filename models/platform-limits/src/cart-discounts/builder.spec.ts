/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartDiscountLimitsProjection } from './types';
import * as CartDiscountsPlatformLimits from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'default',
      CartDiscountsPlatformLimits.random(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'rest',
      CartDiscountsPlatformLimits.random(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCartDiscountLimitsProjection,
      TCartDiscountLimitsProjection
    >(
      'graphql',
      CartDiscountsPlatformLimits.random(),
      expect.objectContaining({
        totalActiveWithoutDiscountCodes: expect.any(Object),
        __typename: 'CartDiscountLimitsProjection',
      })
    )
  );
});
