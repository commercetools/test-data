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
        price: null,
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ]),
        assets: expect.arrayContaining([]),
        availability: null,
        isMatchingVariant: expect.any(Boolean),
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
        price: null,
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ]),
        assets: expect.arrayContaining([]),
        availability: null,
        isMatchingVariant: expect.any(Boolean),
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
        id: expect.any(String),
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
            __typename: 'ProductPrice',
          }),
        ]),
        price: null,
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
            __typename: 'Image',
          }),
        ]),
        attributesRaw: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            __typename: 'RawProductAttribute',
          }),
        ]),
        assets: expect.arrayContaining([]),
        availability: null,
        __typename: 'ProductVariant',
      })
    )
  );
});
