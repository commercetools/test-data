/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TCustomerGroupLimitsProjection } from './types';
import * as CustomerGroupLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});
describe('building', () => {
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'default',
      CustomerGroupLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'rest',
      CustomerGroupLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomerGroupLimitsProjection,
      TCustomerGroupLimitsProjection
    >(
      'graphql',
      CustomerGroupLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
        __typename: 'CustomerGroupLimitsProjection',
      })
    )
  );
});
