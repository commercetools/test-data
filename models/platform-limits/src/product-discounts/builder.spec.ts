/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDiscountLimitsProjection } from './types';
import * as ProductDiscountLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'default',
      ProductDiscountLimitsProjection.random(),
      expect.objectContaining({
        totalActive: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'rest',
      ProductDiscountLimitsProjection.random(),
      expect.objectContaining({
        totalActive: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductDiscountLimitsProjection,
      TProductDiscountLimitsProjection
    >(
      'graphql',
      ProductDiscountLimitsProjection.random(),
      expect.objectContaining({
        totalActive: expect.any(Object),
        __typename: 'ProductDiscountLimitsProjection',
      })
    )
  );
});
