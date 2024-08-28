/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartLimitsProjection } from './types';
import * as CartLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'default',
      CartLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'rest',
      CartLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<TCartLimitsProjection, TCartLimitsProjection>(
      'graphql',
      CartLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        __typename: 'CartLimitsProjection',
      })
    )
  );
});
