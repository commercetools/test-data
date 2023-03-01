/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProduct, TProductGraphql } from './types';
import * as Product from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProduct, TProduct>(
      'default',
      Product.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProduct, TProduct>(
      'rest',
      Product.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProduct, TProductGraphql>(
      'graphql',
      Product.random(),
      expect.objectContaining({
        __typename: 'Product',
      })
    )
  );
});
