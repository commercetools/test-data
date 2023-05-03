/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TProductDiscountValueExternal,
  TProductDiscountValueExternalGraphql,
} from './types';
import * as ProductDiscountValueExternal from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueExternal,
      TProductDiscountValueExternal
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
      TProductDiscountValueExternal,
      TProductDiscountValueExternal
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
      TProductDiscountValueExternal,
      TProductDiscountValueExternalGraphql
    >(
      'graphql',
      ProductDiscountValueExternal.random(),
      expect.objectContaining({
        type: 'external',
        __typename: 'ProductDiscountValueExternal',
      })
    )
  );
});
