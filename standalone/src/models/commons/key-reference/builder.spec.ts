/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type { TKeyReference, TKeyReferenceGraphql } from './types';
import * as KeyReference from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TKeyReference, TKeyReference>(
      'default',
      KeyReference.random(),
      {
        typeId: null,
        key: expect.any(String),
      }
    )
  );
  it(
    ...createBuilderSpec<TKeyReference, TKeyReference>(
      'rest',
      KeyReference.random().typeId('product'),
      {
        typeId: 'product',
        key: expect.any(String),
      }
    )
  );
  it(
    ...createBuilderSpec<TKeyReference, TKeyReferenceGraphql>(
      'graphql',
      KeyReference.random().typeId('product'),
      {
        __typename: 'Reference',
        typeId: 'product',
        key: expect.any(String),
      }
    )
  );
});
