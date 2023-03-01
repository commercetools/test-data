/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrder, TOrderGraphql } from './types';
import * as Order from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrder, TOrder>(
      'default',
      Order.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TOrder, TOrder>(
      'rest',
      Order.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TOrder, TOrderGraphql>(
      'graphql',
      Order.random(),
      expect.objectContaining({
        __typename: 'Order',
      })
    )
  );
});
