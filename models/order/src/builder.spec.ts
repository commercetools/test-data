/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrder, TOrderGraphql, TOrderRest } from './types';
import * as Order from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrder, TOrder>(
      'default',
      Order.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        completedAt: null,
        orderNumber: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        anonymousId: expect.any(String),
        businessUnit: null,
        store: null,
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        taxedPrice: null,
        taxedShippingPrice: null,
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
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        customerGroup: expect.objectContaining({
          name: expect.any(String),
          version: expect.any(Number),
        }),
        country: expect.any(String),
        orderState: expect.any(String),
        state: null,
        shipmentState: expect.any(String),
        paymentState: expect.any(String),
        shippingInfo: null,
        syncInfo: null,
        returnInfo: expect.arrayContaining([]),
        purchaseOrderNumber: expect.any(String),
        discountCodes: expect.arrayContaining([]),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            cartPredicate: expect.any(String),
          }),
        ]),
        cart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        quote: null,
        custom: null,
        paymentInfo: null,
        locale: expect.any(String),
        inventoryMode: expect.any(String),
        shippingRateInput: null,
        origin: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            state: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TOrder, TOrderRest>(
      'rest',
      Order.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        completedAt: null,
        orderNumber: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        anonymousId: expect.any(String),
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        store: expect.objectContaining({
          typeId: 'store',
        }),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        taxedPrice: null,
        taxedShippingPrice: null,
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
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        country: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        shipmentState: expect.any(String),
        paymentState: expect.any(String),
        shippingInfo: null,
        syncInfo: null,
        returnInfo: expect.arrayContaining([]),
        purchaseOrderNumber: expect.any(String),
        discountCodes: expect.arrayContaining([]),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
          }),
        ]),
        cart: expect.objectContaining({
          typeId: 'cart',
        }),
        quote: expect.objectContaining({
          typeId: 'quote',
        }),
        custom: null,
        paymentInfo: null,
        locale: expect.any(String),
        inventoryMode: expect.any(String),
        shippingRateInput: null,
        origin: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            state: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TOrder, TOrderGraphql>(
      'graphql',
      Order.random(),
      expect.objectContaining({
        id: expect.any(String),
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
        completedAt: null,
        orderNumber: expect.any(String),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        anonymousId: expect.any(String),
        businessUnit: null,
        businessUnitRef: expect.objectContaining({
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        store: null,
        storeRef: expect.objectContaining({
          typeId: 'store',
          __typename: 'Reference',
        }),
        lineItems: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            quantity: expect.any(Number),
          }),
        ]),
        customLineItems: expect.arrayContaining([]),
        totalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        taxedPrice: null,
        taxedShippingPrice: null,
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
        shippingMode: expect.any(String),
        shipping: expect.arrayContaining([]),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        customerGroup: expect.objectContaining({
          name: expect.any(String),
          version: expect.any(Number),
        }),
        customerGroupRef: expect.objectContaining({
          typeId: 'customer-group',
          __typename: 'Reference',
        }),
        country: expect.any(String),
        orderState: expect.any(String),
        state: null,
        stateRef: expect.objectContaining({
          typeId: 'state',
          __typename: 'Reference',
        }),
        shipmentState: expect.any(String),
        paymentState: expect.any(String),
        shippingInfo: null,
        syncInfo: null,
        returnInfo: expect.arrayContaining([]),
        purchaseOrderNumber: expect.any(String),
        discountCodes: expect.arrayContaining([]),
        refusedGifts: expect.arrayContaining([
          expect.objectContaining({
            cartPredicate: expect.any(String),
          }),
        ]),
        refusedGiftsRef: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
            __typename: 'Reference',
          }),
        ]),
        cart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        cartRef: expect.objectContaining({
          typeId: 'cart',
          __typename: 'Reference',
        }),
        quoteRef: expect.objectContaining({
          typeId: 'quote',
          __typename: 'Reference',
        }),
        custom: null,
        paymentInfo: null,
        locale: expect.any(String),
        inventoryMode: expect.any(String),
        shippingRateInput: null,
        origin: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            state: expect.any(String),
          }),
        ]),
        __typename: 'Order',
      })
    )
  );
});
