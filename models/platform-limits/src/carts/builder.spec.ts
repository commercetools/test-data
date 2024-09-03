/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartLimitsProjection } from './types';
import * as CartLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});
describe('building', () => {
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'default',
      CartLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'rest',
      CartLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'graphql',
      CartLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
        __typename: 'CartLimitsProjection',
      })
    )
  );
});
