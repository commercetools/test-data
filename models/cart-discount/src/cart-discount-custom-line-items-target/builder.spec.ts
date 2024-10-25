/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountCustomLineItemsTarget,
  TCartDiscountCustomLineItemsTargetGraphql,
} from './types';
import * as CartDiscountCustomLineItemsTarget from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTarget,
      TCartDiscountCustomLineItemsTarget
    >(
      'default',
      CartDiscountCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'customLineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTarget,
      TCartDiscountCustomLineItemsTarget
    >(
      'rest',
      CartDiscountCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'customLineItems',
        predicate: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountCustomLineItemsTarget,
      TCartDiscountCustomLineItemsTargetGraphql
    >(
      'graphql',
      CartDiscountCustomLineItemsTarget.random(),
      expect.objectContaining({
        type: 'customLineItems',
        predicate: expect.any(String),
        __typename: 'CustomLineItemsTarget',
      })
    )
  );
});
