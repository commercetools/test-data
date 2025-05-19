/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCartDiscountLineItemsTargetDraft,
  TCartDiscountLineItemsTargetDraftGraphql,
} from '../types';
import * as CartDiscountLineItemsTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountLineItemsTargetDraft,
      TCartDiscountLineItemsTargetDraft
    >(
      'default',
      CartDiscountLineItemsTargetDraft.random(),
      expect.objectContaining({
        type: 'lineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountLineItemsTargetDraft,
      TCartDiscountLineItemsTargetDraftGraphql
    >(
      'graphql',
      CartDiscountLineItemsTargetDraft.random(),
      expect.objectContaining({
        lineItems: {
          predicate: expect.any(String),
        },
      })
    )
  );
});
