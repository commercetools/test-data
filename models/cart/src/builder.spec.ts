/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCart, TCartGraphql } from './types';
import * as Cart from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCart, TCart>(
      'default',
      Cart.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TCart, TCart>(
      'rest',
      Cart.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TCart, TCartGraphql>(
      'graphql',
      Cart.random(),
      expect.objectContaining({
        __typename: 'Cart',
      })
    )
  );
});
