/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomerLimitsProjection } from './types';
import * as CustomerLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});
describe('building', () => {
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'default',
      CustomerLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'rest',
      CustomerLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomerLimitsProjection, TCustomerLimitsProjection>(
      'graphql',
      CustomerLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
        __typename: 'CustomerLimitsProjection',
      })
    )
  );
});
