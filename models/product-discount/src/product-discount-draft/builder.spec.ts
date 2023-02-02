/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDiscountDraft, TProductDiscountDraftGraphql } from '../types';
import * as ProductDiscountDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraft>(
      'default',
      ProductDiscountDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraft>(
      'rest',
      ProductDiscountDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductDiscountDraft, TProductDiscountDraftGraphql>(
      'graphql',
      ProductDiscountDraft.random(),
      expect.objectContaining({
        __typename: 'ProductDiscountDraft',
      })
    )
  );
});
