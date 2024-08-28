/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TTaxCategoryLimitsProjection } from './types';
import * as TaxCategoryLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'default',
      TaxCategoryLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'rest',
      TaxCategoryLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TTaxCategoryLimitsProjection,
      TTaxCategoryLimitsProjection
    >(
      'graphql',
      TaxCategoryLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),

        __typename: 'TaxCategoryLimitsProjection',
      })
    )
  );
});
