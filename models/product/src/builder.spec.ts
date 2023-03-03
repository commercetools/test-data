/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProduct, TProductGraphql } from './types';
import * as Product from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProduct, TProduct>(
      'default',
      Product.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: null,
        masterData: expect.objectContaining({
          current: expect.objectContaining({
            categories: expect.arrayContaining([]),
          }),
        }),
        priceMode: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TProduct, TProduct>(
      'rest',
      Product.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: null,
        masterData: expect.objectContaining({
          current: expect.objectContaining({
            categories: expect.arrayContaining([]),
          }),
        }),
        priceMode: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TProduct, TProductGraphql>(
      'graphql',
      Product.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        reviewRatingStatistics: null,
        masterData: expect.objectContaining({
          current: expect.objectContaining({
            categories: expect.arrayContaining([]),
          }),
        }),
        priceMode: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        stateRef: expect.objectContaining({
          typeId: 'state',
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        taxCategoryRef: expect.objectContaining({
          typeId: 'product-type',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        productTypeRef: expect.objectContaining({
          typeId: 'product-type',
        }),
        skus: expect.arrayContaining([expect.any(String)]),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        __typename: 'Product',
      })
    )
  );
});
