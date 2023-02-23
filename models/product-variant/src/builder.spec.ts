/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductVariant, TProductVariantGraphql } from './types';
import * as ProductVariant from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductVariant, TProductVariant>(
      'default',
      ProductVariant.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductVariant, TProductVariant>(
      'rest',
      ProductVariant.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TProductVariant, TProductVariantGraphql>(
      'graphql',
      ProductVariant.random(),
      expect.objectContaining({
        __typename: 'ProductVariant',
      })
    )
  );
});
