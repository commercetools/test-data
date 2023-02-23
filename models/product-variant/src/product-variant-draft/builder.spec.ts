/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductVariantDraft, TProductVariantDraftGraphql } from '../types';
import * as ProductVariantDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraft>(
      'default',
      ProductVariantDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraft>(
      'rest',
      ProductVariantDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraftGraphql>(
      'graphql',
      ProductVariantDraft.random(),
      expect.objectContaining({
        __typename: 'ProductVariantDraft',
      })
    )
  );
});
