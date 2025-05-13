/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TZoneLimitsProjection } from './types';
import * as ZoneLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

describe('building', () => {
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'default',
      ZoneLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'rest',
      ZoneLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'graphql',
      ZoneLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,

        __typename: 'ZoneLimitsProjection',
      })
    )
  );
});
