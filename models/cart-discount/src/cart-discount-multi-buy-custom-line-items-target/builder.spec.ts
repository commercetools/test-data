/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountMultiBuyCustomLineItemsTarget,
  TCartDiscountMultiBuyCustomLineItemsTargetGraphql,
} from './types';
import * as CartDiscountMultiBuyCustomLineItemsTarget from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyCustomLineItemsTarget,
      TCartDiscountMultiBuyCustomLineItemsTarget
    >(
      'default',
      CartDiscountMultiBuyCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyCustomLineItems',
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
      TCartDiscountMultiBuyCustomLineItemsTarget,
      TCartDiscountMultiBuyCustomLineItemsTarget
    >(
      'rest',
      CartDiscountMultiBuyCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyCustomLineItems',
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
      TCartDiscountMultiBuyCustomLineItemsTarget,
      TCartDiscountMultiBuyCustomLineItemsTargetGraphql
    >(
      'graphql',
      CartDiscountMultiBuyCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'multiBuyCustomLineItems',
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.any(String),
        __typename: 'MultiBuyCustomLineItemsTarget',
      })
    )
  );
});
