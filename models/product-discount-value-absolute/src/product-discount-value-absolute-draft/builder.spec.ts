/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TProductDiscountValueRelativeDraft,
  TProductDiscountValueRelativeDraftGraphql,
} from './types';
import * as ProductDiscountValueRelative from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraft
    >(
      'default',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraft
    >(
      'rest',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraftGraphql
    >(
      'graphql',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
        __typename: 'ProductDiscountValueRelativeDraft',
      })
    )
  );
});
