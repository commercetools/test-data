/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountTotalPriceTarget,
  TCartDiscountTotalPriceTargetGraphql,
} from './types';
import * as CartDiscountTotalPriceTarget from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTarget,
      TCartDiscountTotalPriceTarget
    >(
      'default',
      CartDiscountTotalPriceTarget.random(),
      expect.objectContaining({
        type: 'totalPrice',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTarget,
      TCartDiscountTotalPriceTarget
    >(
      'rest',
      CartDiscountTotalPriceTarget.random(),
      expect.objectContaining({
        type: 'totalPrice',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTarget,
      TCartDiscountTotalPriceTargetGraphql
    >(
      'graphql',
      CartDiscountTotalPriceTarget.random(),
      expect.objectContaining({
        type: 'totalPrice',
        __typename: 'CartDiscountTotalPriceTarget',
      })
    )
  );
});
