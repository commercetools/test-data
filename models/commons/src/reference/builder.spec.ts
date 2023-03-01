/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TReference, TReferenceGraphql, TReferenceRest } from './types';
import * as Reference from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TReference, TReference>(
      'default',
      Reference.random(),
      {
        id: expect.any(String),
        typeId: null,
        /**
         * `key` or `id` is required. In this case, we choose to leave `key` as
         * `null` so that random generations of this model doesn't yield a reference
         * with both a `key` and `id`, which would be illegal.
         */
        key: null,
      }
    )
  );
  it(
    ...createBuilderSpec<TReference, TReferenceRest>(
      'rest',
      Reference.random().typeId('product'),
      {
        id: expect.any(String),
        typeId: 'product',
        key: null,
        obj: {
          id: expect.any(String),
          key: null,
        },
      }
    )
  );
  it(
    ...createBuilderSpec<TReference, TReferenceGraphql>(
      'graphql',
      Reference.random().typeId('product'),
      {
        __typename: 'Reference',
        id: expect.any(String),
        typeId: 'product',
        key: null,
      }
    )
  );
});
