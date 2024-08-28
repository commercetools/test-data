/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TShippingMethodLimitsProjection } from './types';
import * as ShippingMethodLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'default',
      ShippingMethodLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'rest',
      ShippingMethodLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShippingMethodLimitsProjection,
      TShippingMethodLimitsProjection
    >(
      'graphql',
      ShippingMethodLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        __typename: 'ShippingMethodLimitsProjection',
      })
    )
  );
});
