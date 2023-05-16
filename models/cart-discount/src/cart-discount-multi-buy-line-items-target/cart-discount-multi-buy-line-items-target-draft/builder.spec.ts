/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountMultiBuyLineItemsTargetDraft,
  TCartDiscountMultiBuyLineItemsTargetDraftGraphql,
} from '../types';
import * as CartDiscountMultiBuyLineItemsTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyLineItemsTargetDraft,
      TCartDiscountMultiBuyLineItemsTargetDraft
    >(
      'default',
      CartDiscountMultiBuyLineItemsTargetDraft.random(),
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
      TCartDiscountMultiBuyLineItemsTargetDraft,
      TCartDiscountMultiBuyLineItemsTargetDraftGraphql
    >(
      'graphql',
      CartDiscountMultiBuyLineItemsTargetDraft.random(),
      expect.objectContaining({
        multiBuyLineItems: {
          type: 'multiBuyLineItems',
          predicate: expect.any(String),
          triggerQuantity: expect.any(Number),
          discountedQuantity: expect.any(Number),
          maxOccurrence: expect.any(Number),
          selectionMode: expect.any(String),
        },
      })
    )
  );
});
