/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCart, TCartGraphql } from './types';
import * as Cart from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCart, TCart>(
      'default',
      Cart.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        anonymousId: expect.any(String),
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        store: null,
        country: expect.any(String),
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        shippingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
        billingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        cartState: expect.any(String),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
          }),
        ]),
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
    ...createBuilderSpec<TCart, TCart>(
      'rest',
      Cart.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        anonymousId: expect.any(String),
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        store: null,
        country: expect.any(String),
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        shippingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
        billingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        cartState: expect.any(String),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
          }),
        ]),
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
    ...createBuilderSpec<TCart, TCartGraphql>(
      'graphql',
      Cart.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
          __typename: 'Reference',
        }),
        anonymousId: expect.any(String),
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        store: null,
        country: expect.any(String),
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
            __typename: 'LineItem',
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        shippingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          __typename: 'Address',
        }),
        billingAddress: expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          __typename: 'Address',
        }),
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            __typename: 'Address',
          }),
        ]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          __typename: 'Money',
        }),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        cartState: expect.any(String),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
            __typename: 'Reference',
          }),
        ]),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        __typename: 'Cart',
      })
    )
  );
});
