/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  inventoryMode,
  orderState,
  paymentState,
  shipmentState,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TOrder, TOrderGraphql, TOrderRest } from './types';
import { Order } from './index';

const getMatchingStrings = (values: { [s: string]: string }) =>
  new RegExp(`^(${Object.values(values).join('|')})$`);

describe('builder', () => {
  const defaultOrderSpec = {
    id: expect.any(String),
    version: expect.any(Number),
    orderNumber: expect.any(String),
    purchaseOrderNumber: expect.any(String),
    customerId: expect.any(String),
    customerEmail: expect.any(String),
    customerGroup: expect.objectContaining({
      name: expect.any(String),
      version: expect.any(Number),
    }),
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
    discountOnTotalPrice: null,
    taxMode: expect.stringMatching(getMatchingStrings(taxMode)),
    taxRoundingMode: expect.stringMatching(getMatchingStrings(taxRoundingMode)),
    taxCalculationMode: expect.stringMatching(
      getMatchingStrings(taxCalculationMode)
    ),
    inventoryMode: expect.stringMatching(getMatchingStrings(inventoryMode)),
    billingAddress: expect.objectContaining({
      city: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
    }),
    shippingAddress: expect.objectContaining({
      city: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
    }),
    shippingMode: expect.stringMatching(getMatchingStrings(shippingMode)),
    shippingKey: expect.any(String),
    shippingInfo: null,
    shippingRateInput: null,
    shippingCustomFields: null,
    shipping: expect.arrayContaining([]),
    itemShippingAddresses: expect.arrayContaining([
      expect.objectContaining({
        title: expect.any(String),
        state: expect.any(String),
      }),
    ]),
    discountCodes: expect.arrayContaining([]),
    directDiscounts: expect.arrayContaining([]),
    refusedGifts: expect.arrayContaining([
      expect.objectContaining({
        cartPredicate: expect.any(String),
      }),
    ]),
    paymentInfo: null,
    discountTypeCombination: null,
    country: expect.any(String),
    locale: expect.stringMatching(/^(en-US|de-DE|es-ES)$/),
    origin: null,
    cart: expect.objectContaining({
      cartState: expect.any(String),
    }),
    quote: null,
    orderState: expect.stringMatching(getMatchingStrings(orderState)),
    shipmentState: expect.stringMatching(getMatchingStrings(shipmentState)),
    paymentState: expect.stringMatching(getMatchingStrings(paymentState)),
    state: null,
    syncInfo: expect.arrayContaining([]),
    returnInfo: expect.arrayContaining([]),
    completedAt: null,
    custom: null,
    createdAt: expect.any(String),
    createdBy: expect.objectContaining({
      customer: expect.objectContaining({ typeId: 'customer' }),
    }),
    lastModifiedAt: expect.any(String),
    lastModifiedBy: expect.objectContaining({
      customer: expect.objectContaining({ typeId: 'customer' }),
    }),
  };
  it(
    ...createBuilderSpec<TOrder, TOrder>(
      'default',
      Order.random(),
      expect.objectContaining({ ...defaultOrderSpec, customer: null })
    )
  );

  describe('rest transformation', () => {
    it(
      ...createBuilderSpec<TOrder, TOrderRest>(
        'rest',
        Order.random(),
        expect.objectContaining({
          ...defaultOrderSpec,
          customerGroup: expect.objectContaining({
            typeId: 'customer-group',
          }),
          businessUnit: expect.objectContaining({
            typeId: 'business-unit',
          }),
          store: expect.objectContaining({
            typeId: 'store',
          }),
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
          state: expect.objectContaining({
            typeId: 'state',
          }),
        })
      )
    );

    it('should not have graphql only properties', () => {
      const defaultModel = Order.random().buildRest<TOrder>();
      expect(defaultModel).not.toHaveProperty('customer');
    });
  });

  it(
    ...createBuilderSpec<TOrder, TOrderGraphql>(
      'graphql',
      Order.random(),
      expect.objectContaining({
        ...defaultOrderSpec,
        customerGroupRef: expect.objectContaining({
          typeId: 'customer-group',
          __typename: 'Reference',
        }),
        businessUnitRef: expect.objectContaining({
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        storeRef: expect.objectContaining({
          typeId: 'store',
          __typename: 'Reference',
        }),
        refusedGiftsRef: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'cart-discount',
            __typename: 'Reference',
          }),
        ]),
        cartRef: expect.objectContaining({
          typeId: 'cart',
          __typename: 'Reference',
        }),
        quoteRef: expect.objectContaining({
          typeId: 'quote',
          __typename: 'Reference',
        }),
        stateRef: expect.objectContaining({
          typeId: 'state',
          __typename: 'Reference',
        }),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        __typename: 'Order',
      })
    )
  );
});

//TODO: add tests when customizing
