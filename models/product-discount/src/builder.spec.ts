/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDiscount, TProductDiscountGraphql } from './types';
import * as ProductDiscount from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDiscount, TProductDiscount>(
      'default',
      ProductDiscount.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDiscount, TProductDiscount>(
      'rest',
      ProductDiscount.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDiscount, TProductDiscountGraphql>(
      'graphql',
      ProductDiscount.random(),
      expect.objectContaining({
        __typename: 'ProductDiscount',
      })
    )
  );
});
