/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountLineItemsTarget,
  TCartDiscountLineItemsTargetGraphql,
} from './types';
import * as CartDiscountLineItemsTarget from '.';

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
        __typename: 'CartDiscountTarget',
      })
    )
  );
});
