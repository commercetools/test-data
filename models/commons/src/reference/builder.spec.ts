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
        key: expect.any(String),
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
        key: expect.any(String),
        obj: {
          id: expect.any(String),
          key: expect.any(String),
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
        key: expect.any(String),
      }
    )
  );
});
