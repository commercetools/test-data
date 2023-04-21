/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountShippingCostTarget,
  TCartDiscountShippingCostTargetGraphql,
} from './types';
import * as CartDiscountShippingCostTarget from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTarget,
      TCartDiscountShippingCostTarget
    >(
      'default',
      CartDiscountShippingCostTarget.random(),
      expect.objectContaining({
        type: 'shipping',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTarget,
      TCartDiscountShippingCostTarget
    >(
      'rest',
      CartDiscountShippingCostTarget.random(),
      expect.objectContaining({
        type: 'shipping',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTarget,
      TCartDiscountShippingCostTargetGraphql
    >(
      'graphql',
      CartDiscountShippingCostTarget.random(),
      expect.objectContaining({
        type: 'shipping',
        __typename: 'ShippingTarget',
      })
    )
  );
});
