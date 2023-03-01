/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartDraft, TCartDraftGraphql } from '../types';
import * as CartDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCartDraft, TCartDraft>(
      'default',
      CartDraft.random(),
      expect.objectContaining({
        currency: expect.any(String),
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
            sku: expect.any(String),
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
        shippingMethod: expect.objectContaining({
          typeId: 'shipping-method',
        }),
        externalTaxRateForShippingMethod: null,
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        customShipping: expect.arrayContaining([]),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCartDraft, TCartDraft>(
      'rest',
      CartDraft.random(),
      expect.objectContaining({
        currency: expect.any(String),
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
            sku: expect.any(String),
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
        shippingMethod: expect.objectContaining({
          typeId: 'shipping-method',
        }),
        externalTaxRateForShippingMethod: null,
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        customShipping: expect.arrayContaining([]),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCartDraft, TCartDraftGraphql>(
      'graphql',
      CartDraft.random(),
      expect.objectContaining({
        currency: expect.any(String),
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
            sku: expect.any(String),
            quantity: expect.any(Number),
            __typename: 'LineItemDraft',
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
        shippingMethod: expect.objectContaining({
          typeId: 'shipping-method',
          __typename: 'Reference',
        }),
        externalTaxRateForShippingMethod: null,
        custom: null,
        locale: expect.any(String),
        deleteDaysAfterLastModification: null,
        shippingRateInput: null,
        origin: expect.any(String),
        shippingMode: expect.any(String),
        customShipping: expect.arrayContaining([]),
        shipping: expect.arrayContaining([]),
        itemShippingAddresses: expect.arrayContaining([]),
        discountCodes: expect.arrayContaining([expect.any(String)]),
        __typename: 'CartDraft',
      })
    )
  );
});
