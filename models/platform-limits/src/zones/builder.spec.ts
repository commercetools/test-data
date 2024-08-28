/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TZoneLimitsProjection } from './types';
import * as ZoneLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'default',
      ZoneLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'rest',
      ZoneLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TZoneLimitsProjection, TZoneLimitsProjection>(
      'graphql',
      ZoneLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),

        __typename: 'ZoneLimitsProjection',
      })
    )
  );
});
