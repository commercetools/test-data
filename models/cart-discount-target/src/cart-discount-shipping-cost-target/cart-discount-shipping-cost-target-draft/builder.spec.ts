/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountShippingCostTargetDraft,
  TCartDiscountShippingCostTargetDraftGraphql,
} from '../types';
import * as CartDiscountShippingCostTargetDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTargetDraft,
      TCartDiscountShippingCostTargetDraft
    >(
      'default',
      CartDiscountShippingCostTargetDraft.random(),
      expect.objectContaining({
        type: 'shipping',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTargetDraft,
      TCartDiscountShippingCostTargetDraft
    >(
      'rest',
      CartDiscountShippingCostTargetDraft.random(),
      expect.objectContaining({
        type: 'shipping',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTargetDraft,
      TCartDiscountShippingCostTargetDraftGraphql
    >(
      'graphql',
      CartDiscountShippingCostTargetDraft.random(),
      expect.objectContaining({
        shipping: {
          type: 'shipping',

          __typename: 'ShippingTargetInput',
        },
        __typename: 'CartDiscountTargetInput',
      })
    )
  );
});