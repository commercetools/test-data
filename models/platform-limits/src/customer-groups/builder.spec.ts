/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomerGroupLimitsProjection } from './types';
import * as CustomerGroupLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'default',
      CustomerGroupLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'rest',
      CustomerGroupLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'graphql',
      CustomerGroupLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        __typename: 'CustomerGroupLimitsProjection',
      })
    )
  );
});
