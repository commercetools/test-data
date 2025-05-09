/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCartDiscountShippingCostTarget,
  TCartDiscountShippingCostTargetGraphql,
} from './types';
import * as CartDiscountShippingCostTarget from './index';

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
