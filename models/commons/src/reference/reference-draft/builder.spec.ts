/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TReferenceDraft,
  TReferenceDraftGraphql,
  TReferenceRest,
} from '../types';
import * as Reference from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TReferenceDraft, TReferenceDraft>(
      'default',
      Reference.random(),
      {
        id: expect.any(String),
        typeId: null,
      }
    )
  );
  it(
    ...createBuilderSpec<TReferenceDraft, TReferenceRest>(
      'rest',
      Reference.random().typeId('product'),
      {
        id: expect.any(String),
        typeId: 'product',
        obj: {
          id: expect.any(String),
        },
      }
    )
  );
  it(
    ...createBuilderSpec<TReferenceDraft, TReferenceDraftGraphql>(
      'graphql',
      Reference.random().typeId('product'),
      {
        id: expect.any(String),
        typeId: 'product',
      }
    )
  );
});
