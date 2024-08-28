/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TShoppingListLimitsProjection } from './types';
import * as ShoppingListLimitsProjection from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'default',
      ShoppingListLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        lineItems: expect.any(Object),
        textLineItems: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'rest',
      ShoppingListLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        lineItems: expect.any(Object),
        textLineItems: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TShoppingListLimitsProjection,
      TShoppingListLimitsProjection
    >(
      'graphql',
      ShoppingListLimitsProjection.random(),
      expect.objectContaining({
        total: expect.any(Object),
        lineItems: expect.any(Object),
        textLineItems: expect.any(Object),
        __typename: 'ShoppingListLimitsProjection',
      })
    )
  );
});
