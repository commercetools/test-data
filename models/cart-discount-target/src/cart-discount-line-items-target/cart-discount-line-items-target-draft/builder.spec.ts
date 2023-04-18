/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountLineItemsTargetDraft,
  TCartDiscountLineItemsTargetDraftGraphql,
} from '../types';
import * as CartDiscountLineItemsTargetDraft from '.';

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
      TCartDiscountLineItemsTargetDraft
    >(
      'rest',
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
        type: 'lineItems',
        predicate: expect.any(String),
        __typename: 'CartDiscountLineItemsTargetInput',
      })
    )
  );
});
