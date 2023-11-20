/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-disabled-tests */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TQuoteRequest,
  TQuoteRequestRest,
  TQuoteRequestGraphql,
} from './types';
import * as QuoteRequest from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TQuoteRequest, TQuoteRequest>(
      'default',
      QuoteRequest.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequestState: expect.any(String),
        comment: null,
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        customerGroup: expect.objectContaining({
          name: expect.any(String),
          version: expect.any(Number),
        }),
        store: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
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
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        country: expect.any(String),
        shippingInfo: null,
        paymentInfo: null,
        shippingRateInput: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        directDiscounts: expect.arrayContaining([]),
        state: null,
        cart: expect.objectContaining({
          cartState: expect.any(String),
        }),

        businessUnit: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          associateMode: expect.any(String),
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteRequest, TQuoteRequestRest>(
      'rest',
      QuoteRequest.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequestState: expect.any(String),
        comment: null,
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
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
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        country: expect.any(String),
        shippingInfo: null,
        paymentInfo: null,
        shippingRateInput: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        directDiscounts: expect.arrayContaining([]),
        state: undefined,
        cart: expect.objectContaining({
          typeId: 'cart',
        }),
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteRequest, TQuoteRequestGraphql>(
      'graphql',
      QuoteRequest.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequestState: expect.any(String),
        comment: null,
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        customerGroup: expect.objectContaining({
          name: expect.any(String),
          version: expect.any(Number),
        }),
        customerGroupRef: expect.objectContaining({
          typeId: 'customer-group',
          __typename: 'Reference',
        }),
        store: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
        }),
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
        inventoryMode: expect.any(String),
        taxMode: expect.any(String),
        taxRoundingMode: expect.any(String),
        taxCalculationMode: expect.any(String),
        country: expect.any(String),
        shippingInfo: null,
        paymentInfo: null,
        shippingRateInput: null,
        itemShippingAddresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        directDiscounts: expect.arrayContaining([]),
        state: null,
        stateRef: undefined,
        cart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        cartRef: expect.objectContaining({
          typeId: 'cart',
          __typename: 'Reference',
        }),
        businessUnit: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          associateMode: expect.any(String),
        }),
        businessUnitRef: expect.objectContaining({
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        custom: null,
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
        __typename: 'QuoteRequest',
      })
    )
  );
});
