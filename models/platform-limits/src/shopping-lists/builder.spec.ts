/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TShoppingListLimitsProjection } from './types';
import * as ShoppingListLimitsProjection from './index';

const expectedLimit = expect.objectContaining({
  limit: expect.any(Number),
});

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

const expectedResult = {
  total: expectedLimitWithCurrent,
  lineItems: expectedLimit,
  textLineItems: expectedLimit,
};

describe('building', () => {
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'default',
      ShoppingListLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'rest',
      ShoppingListLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining(expectedResult)
    )
  );
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'graphql',
      ShoppingListLimitsProjection.presets.withLimitAndCurrent(),
      expect.objectContaining({
        ...expectedResult,
        __typename: 'ShoppingListLimitsProjection',
      })
    )
  );
});
