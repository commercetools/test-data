/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrderGraphql, TOrderRest } from './types';
import { OrderRest, OrderGraphql } from './index';

describe('builder', () => {
  describe('rest transformation', () => {
    it(
      ...createBuilderSpec<TOrderRest, TOrderRest>(
        'rest',
        // @ts-ignore
        OrderRest.random(),
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
            id: expect.any(String),
            typeId: 'business-unit',
            obj: expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
            }),
          }),
          store: expect.objectContaining({
            id: expect.any(String),
            typeId: 'store',
            obj: expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
            }),
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
            id: expect.any(String),
            typeId: 'customer-group',
            obj: expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
            }),
          }),
          country: expect.any(String),
          orderState: expect.any(String),
          state: expect.objectContaining({
            id: expect.any(String),
            typeId: 'state',
            obj: expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
            }),
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
              id: expect.any(String),
              typeId: 'cart-discount',
              obj: expect.objectContaining({
                id: expect.any(String),
                key: expect.any(String),
              }),
            }),
          ]),
          cart: expect.objectContaining({
            id: expect.any(String),
            typeId: 'cart',
            obj: expect.objectContaining({
              id: expect.any(String),
              customerId: expect.any(String),
            }),
          }),
          quote: expect.objectContaining({
            id: expect.any(String),
            typeId: 'quote',
            obj: expect.objectContaining({
              id: expect.any(String),
              key: expect.any(String),
            }),
          }),
          custom: null,
          paymentInfo: null,
          locale: expect.any(String),
          inventoryMode: expect.any(String),
          shippingRateInput: null,
          origin: 'Customer',
          itemShippingAddresses: expect.arrayContaining([
            expect.objectContaining({
              title: expect.any(String),
              state: expect.any(String),
            }),
          ]),
        })
      )
    );

    it('should not have graphql only properties', () => {
      const defaultModel = OrderRest.random().build();
      expect(defaultModel).not.toHaveProperty('customer');
    });
  });

  it(
    ...createBuilderSpec<TOrderGraphql, TOrderGraphql>(
      'graphql',
      // @ts-ignore
      OrderGraphql.random(),
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
        customer: expect.objectContaining({
          id: expect.any(String),
          email: expect.any(String),
          __typename: 'Customer',
        }),
        customerId: expect.any(String),
        customerEmail: expect.any(String),
        anonymousId: expect.any(String),
        businessUnit: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          __typename: 'BusinessUnit',
        }),
        businessUnitRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        store: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          __typename: 'Store',
        }),
        storeRef: expect.objectContaining({
          id: expect.any(String),
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
          id: expect.any(String),
          typeId: 'customer-group',
          __typename: 'Reference',
        }),
        country: expect.any(String),
        orderState: expect.any(String),
        state: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          __typename: 'State',
        }),
        stateRef: expect.objectContaining({
          id: expect.any(String),
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
        refusedGiftsRefs: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            typeId: 'cart-discount',
            __typename: 'Reference',
          }),
        ]),
        cart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        cartRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart',
          __typename: 'Reference',
        }),
        quote: expect.objectContaining({
          version: expect.any(Number),
          __typename: 'Quote',
        }),
        quoteRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'quote',
          __typename: 'Reference',
        }),
        custom: null,
        paymentInfo: null,
        locale: expect.any(String),
        inventoryMode: expect.any(String),
        shippingRateInput: null,
        origin: 'Customer',
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
