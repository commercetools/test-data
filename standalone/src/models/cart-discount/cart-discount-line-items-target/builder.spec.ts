/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCartDiscountLineItemsTarget,
  TCartDiscountLineItemsTargetGraphql,
} from './types';
import * as CartDiscountLineItemsTarget from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountLineItemsTarget,
      TCartDiscountLineItemsTarget
    >(
      'default',
      CartDiscountLineItemsTarget.random(),
      expect.objectContaining({
        type: 'lineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountLineItemsTarget,
      TCartDiscountLineItemsTarget
    >(
      'rest',
      CartDiscountLineItemsTarget.random(),
      expect.objectContaining({
        type: 'lineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountLineItemsTarget,
      TCartDiscountLineItemsTargetGraphql
    >(
      'graphql',
      CartDiscountLineItemsTarget.random(),
      expect.objectContaining({
        type: 'lineItems',
        predicate: expect.any(String),
        __typename: 'LineItemsTarget',
      })
    )
  );
});
