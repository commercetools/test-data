/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountMultiBuyLineItemsTarget,
  TCartDiscountMultiBuyLineItemsTargetGraphql,
} from './types';
import * as CartDiscountMultiBuyLineItemsTarget from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyLineItemsTarget,
      TCartDiscountMultiBuyLineItemsTarget
    >(
      'default',
      CartDiscountMultiBuyLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyLineItems',
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyLineItemsTarget,
      TCartDiscountMultiBuyLineItemsTarget
    >(
      'rest',
      CartDiscountMultiBuyLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyLineItems',
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyLineItemsTarget,
      TCartDiscountMultiBuyLineItemsTargetGraphql
    >(
      'graphql',
      CartDiscountMultiBuyLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyLineItems',
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.any(String),
        __typename: 'MultiBuyLineItemsTarget',
      })
    )
  );
});
