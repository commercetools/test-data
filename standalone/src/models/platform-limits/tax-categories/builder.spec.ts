/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TTaxCategoryLimitsProjection } from './types';
import * as TaxCategoryLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

describe('building', () => {
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'default',
      TaxCategoryLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'rest',
      TaxCategoryLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'graphql',
      TaxCategoryLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        total: expectedLimitWithCurrent,
        __typename: 'TaxCategoryLimitsProjection',
      })
    )
  );
});
