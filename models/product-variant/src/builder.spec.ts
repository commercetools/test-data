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
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
          }),
        ]),
        price: expect.objectContaining({
          value: expect.any(Object),
        }),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        // TODO: test for attributes
        attributes: expect.arrayContaining([]),
        assets: expect.arrayContaining([]),
        availability: null,
        isMatchingVariant: null,
        scopedPrice: null,
        scopedPriceDiscounted: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProductVariant, TProductVariant>(
      'rest',
      ProductVariant.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
          }),
        ]),
        price: expect.objectContaining({
          value: expect.any(Object),
        }),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([]),
        assets: expect.arrayContaining([]),
        availability: null,
        isMatchingVariant: null,
        scopedPrice: null,
        scopedPriceDiscounted: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProductVariant, TProductVariantGraphql>(
      'graphql',
      ProductVariant.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
            __typename: 'ProductPrice',
          }),
        ]),
        price: expect.objectContaining({
          value: expect.any(Object),
          __typename: 'ProductPrice',
        }),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
            __typename: 'Image',
          }),
        ]),
        attributes: expect.arrayContaining([]),
        assets: expect.arrayContaining([]),
        availability: null,
        isMatchingVariant: null,
        scopedPrice: null,
        scopedPriceDiscounted: null,
        __typename: 'ProductVariant',
      })
    )
  );
});
