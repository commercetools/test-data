/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetDraft,
  TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
} from '../types';
import * as CartDiscountMultiBuyCustomLineItemsTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountMultiBuyCustomLineItemsTargetDraft,
      TCartDiscountMultiBuyCustomLineItemsTargetDraft
    >(
      'default',
      CartDiscountMultiBuyCustomLineItemsTargetDraft.random(),
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
      TCartDiscountMultiBuyCustomLineItemsTargetDraft,
      TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql
    >(
      'graphql',
      CartDiscountMultiBuyCustomLineItemsTargetDraft.random(),
      expect.objectContaining({
        multiBuyCustomLineItems: {
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
