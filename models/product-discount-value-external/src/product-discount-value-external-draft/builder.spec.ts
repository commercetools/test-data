/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TProductDiscountValueExternalDraft,
  TProductDiscountValueExternalDraftGraphql,
} from './types';
import * as ProductDiscountValueExternal from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraft
    >(
      'default',
      ProductDiscountValueExternal.random(),
      expect.objectContaining({
        type: 'external',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraft
    >(
      'rest',
      ProductDiscountValueExternal.random(),
      expect.objectContaining({
        type: 'external',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraftGraphql
    >(
      'graphql',
      ProductDiscountValueExternal.random(),
      expect.objectContaining({
        type: 'external',
        __typename: 'ProductDiscountValueExternalDraft',
      })
    )
  );
});
