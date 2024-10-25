/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountCustomLineItemsTargetDraft,
  TCartDiscountCustomLineItemsTargetDraftGraphql,
} from '../types';
import * as CartDiscountCustomLineItemsTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTargetDraft,
      TCartDiscountCustomLineItemsTargetDraft
    >(
      'default',
      CartDiscountCustomLineItemsTargetDraft.random(),
      expect.objectContaining({
        type: 'customLineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTargetDraft,
      TCartDiscountCustomLineItemsTargetDraft
    >(
      'rest',
      CartDiscountCustomLineItemsTargetDraft.random(),
      expect.objectContaining({
        type: 'customLineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTargetDraft,
      TCartDiscountCustomLineItemsTargetDraftGraphql
    >(
      'graphql',
      CartDiscountCustomLineItemsTargetDraft.random(),
      expect.objectContaining({
        customLineItems: {
          predicate: expect.any(String),
        },
      })
    )
  );
});
