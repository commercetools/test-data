/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TLineItem, TLineItemGraphql } from './types';
import * as LineItem from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLineItem, TLineItem>(
      'default',
      LineItem.random(),
      expect.objectContaining({
        id: expect.any(String),
        productId: expect.any(String),
        productKey: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        productSlug: expect.objectContaining({
          en: expect.any(String),
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        variant: null,
        price: expect.objectContaining({
          id: expect.any(String),
          value: expect.any(Object),
        }),
        taxedPrice: null,
        taxedPricePortions: [],
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
        }),
        quantity: expect.any(Number),
        addedAt: expect.any(String),
        state: [],
        taxRate: expect.objectContaining({
          id: expect.any(String),
          amount: expect.any(Number),
        }),
        perMethodTaxRate: [],
        supplyChannel: expect.objectContaining({
          roles: expect.arrayContaining([expect.any(String)]),
          address: expect.any(Object),
        }),
        distributionChannel: expect.objectContaining({
          roles: expect.arrayContaining([expect.any(String)]),
          address: expect.any(Object),
        }),
        discountedPricePerQuantity: [],
        priceMode: expect.any(String),
        lineItemMode: expect.any(String),
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        lastModifiedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLineItem, TLineItem>(
      'rest',
      LineItem.random(),
      expect.objectContaining({
        id: expect.any(String),
        productId: expect.any(String),
        productKey: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        productSlug: expect.objectContaining({
          en: expect.any(String),
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        variant: null,
        price: expect.objectContaining({
          id: expect.any(String),
          value: expect.any(Object),
        }),
        taxedPrice: null,
        taxedPricePortions: [],
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
        }),
        quantity: expect.any(Number),
        addedAt: expect.any(String),
        state: [],
        taxRate: expect.objectContaining({
          id: expect.any(String),
          amount: expect.any(Number),
        }),
        perMethodTaxRate: [],
        supplyChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        distributionChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        discountedPricePerQuantity: [],
        priceMode: expect.any(String),
        lineItemMode: expect.any(String),
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        lastModifiedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLineItem, TLineItemGraphql>(
      'graphql',
      LineItem.random(),
      expect.objectContaining({
        id: expect.any(String),
        productId: expect.any(String),
        productKey: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        productSlugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        productTypeRef: expect.objectContaining({
          typeId: 'product-type',
        }),
        variant: null,
        price: expect.objectContaining({
          id: expect.any(String),
          value: expect.any(Object),
        }),
        taxedPrice: null,
        taxedPricePortions: [],
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
        }),
        quantity: expect.any(Number),
        addedAt: expect.any(String),
        state: [],
        taxRate: expect.objectContaining({
          id: expect.any(String),
          amount: expect.any(Number),
        }),
        perMethodTaxRate: [],
        supplyChannel: expect.objectContaining({
          __typename: 'Channel',
        }),
        distributionChannel: expect.objectContaining({
          __typename: 'Channel',
        }),
        discountedPricePerQuantity: [],
        priceMode: expect.any(String),
        lineItemMode: expect.any(String),
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        lastModifiedAt: expect.any(String),
        __typename: 'LineItem',
      })
    )
  );
});
