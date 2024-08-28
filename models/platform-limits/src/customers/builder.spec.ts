/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomerLimitsProjection } from './types';
import * as CustomerLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'default',
      CustomerLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'rest',
      CustomerLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'graphql',
      CustomerLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        __typename: 'CustomerLimitsProjection',
      })
    )
  );
});
