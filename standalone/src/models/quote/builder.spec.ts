/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-disabled-tests */

import { createBuilderSpec } from '@/core/test-utils';
import type { TQuote, TQuoteRest, TQuoteGraphql } from './types';
import * as Quote from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TQuote, TQuote>(
      'default',
      Quote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          quoteRequestState: expect.any(String),
        }),
        stagedQuote: expect.objectContaining({
          stagedQuoteState: expect.any(String),
        }),
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        customerGroup: expect.objectContaining({
          name: expect.any(String),
          version: expect.any(Number),
        }),
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        buyerComment: expect.any(String),
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
        quoteState: expect.any(String),
        state: null,
        purchaseOrderNumber: null,
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
    ...createBuilderSpec<TQuote, TQuoteRest>(
      'rest',
      Quote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          id: expect.any(String),
          typeId: 'quote-request',
        }),
        stagedQuote: expect.objectContaining({
          id: expect.any(String),
          typeId: 'staged-quote',
        }),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        customerGroup: expect.objectContaining({
          typeId: 'customer-group',
        }),
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        buyerComment: expect.any(String),
        store: expect.objectContaining({
          key: expect.any(String),
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
        quoteState: expect.any(String),
        state: undefined,
        businessUnit: expect.objectContaining({
          key: expect.any(String),
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
    ...createBuilderSpec<TQuote, TQuoteGraphql>(
      'graphql',
      Quote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        quoteRequest: expect.objectContaining({
          quoteRequestState: expect.any(String),
        }),
        quoteRequestRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'quote-request',
          __typename: 'Reference',
        }),
        stagedQuote: expect.objectContaining({
          stagedQuoteState: expect.any(String),
        }),
        stagedQuoteRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'staged-quote',
          __typename: 'Reference',
        }),
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
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        buyerComment: expect.any(String),
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
        quoteState: expect.any(String),
        state: null,
        stateRef: undefined,
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
        __typename: 'Quote',
      })
    )
  );
});
