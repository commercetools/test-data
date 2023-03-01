/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDraft, TProductDraftGraphql } from './types';
import * as ProductDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDraft, TProductDraft>(
      'default',
      ProductDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDraft, TProductDraft>(
      'rest',
      ProductDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDraft, TProductDraftGraphql>(
      'graphql',
      ProductDraft.random(),
      expect.objectContaining({
        __typename: 'ProductDraft',
      })
    )
  );
});
