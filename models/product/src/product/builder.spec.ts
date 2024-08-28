/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProduct, TProductGraphql } from './types';
import * as Product from './index';

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
        skus: expect.arrayContaining([]),
        state: null,
        taxCategory: expect.objectContaining({
          id: expect.any(String),
          typeId: 'tax-category',
          obj: expect.objectContaining({
            id: expect.any(String),
            version: expect.any(Number),
            key: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            rates: expect.any(Array),
            createdAt: expect.any(String),
            createdBy: expect.objectContaining({
              customer: expect.objectContaining({ typeId: 'customer' }),
            }),
            lastModifiedAt: expect.any(String),
            lastModifiedBy: expect.objectContaining({
              customer: expect.objectContaining({ typeId: 'customer' }),
            }),
          }),
        }),
        productType: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
          obj: expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
            version: expect.any(Number),
            createdAt: expect.any(String),
            createdBy: expect.objectContaining({
              customer: expect.objectContaining({ typeId: 'customer' }),
            }),
            lastModifiedAt: expect.any(String),
            lastModifiedBy: expect.objectContaining({
              customer: expect.objectContaining({ typeId: 'customer' }),
            }),
            name: expect.any(String),
            description: expect.any(String),
            attributes: expect.arrayContaining([
              expect.objectContaining({
                type: expect.objectContaining({ name: expect.any(String) }),
                name: expect.any(String),
                label: expect.objectContaining({
                  de: expect.any(String),
                  en: expect.any(String),
                  fr: expect.any(String),
                }),
                isRequired: expect.any(Boolean),
                attributeConstraint: expect.any(String),
                inputTip: expect.objectContaining({
                  de: expect.any(String),
                  en: expect.any(String),
                  fr: expect.any(String),
                }),
                inputHint: expect.any(String),
                isSearchable: expect.any(Boolean),
              }),
            ]),
          }),
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
        state: null,
        taxCategory: expect.objectContaining({
          id: expect.any(String),
          typeId: 'tax-category',
          obj: expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
            name: expect.any(String),
            rates: expect.any(Array),
          }),
        }),
        productType: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
          obj: expect.objectContaining({
            id: expect.any(String),
            key: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
          }),
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
        state: undefined,
        stateRef: undefined,
        taxCategory: expect.objectContaining({
          __typename: 'TaxCategory',
          id: expect.any(String),
          version: expect.any(Number),
          key: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          rates: expect.any(Array),
          createdAt: expect.any(String),
          createdBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
        }),
        taxCategoryRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'tax-category',
        }),
        productType: expect.objectContaining({
          __typename: 'ProductTypeDefinition',
          id: expect.any(String),
          key: expect.any(String),
          version: expect.any(Number),
          createdAt: expect.any(String),
          createdBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
          name: expect.any(String),
          description: expect.any(String),
          attributeDefinitions: expect.objectContaining({
            __typename: 'AttributeDefinitionResult',
          }),
        }),
        productTypeRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-type',
        }),
        skus: expect.arrayContaining([]),
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
