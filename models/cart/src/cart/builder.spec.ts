import { TBuilder } from '@commercetools-test-data/core';
import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import { LineItem } from '../line-item';
import type { TCart, TCartGraphql, TCartRest } from './types';
import { Cart, CartGraphql, CartRest } from './index';

const populateCommon = <TModel extends TCart | TCartRest | TCartGraphql>(
  model: TBuilder<TModel>
) => model.country('DE').custom(CustomFieldBooleanType.random());

const populateRestModel = (model: TBuilder<TCartRest>) => populateCommon(model);

const populateGraphqlModel = (model: TBuilder<TCartGraphql>) =>
  populateCommon(model);

const validateCommonFields = (model: TCartRest | TCartGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      customerId: expect.any(String),
      customerEmail: expect.any(String),
      anonymousId: expect.any(String),
      store: null,
      country: expect.any(String),
      inventoryMode: expect.any(String),
      taxMode: expect.any(String),
      taxRoundingMode: expect.any(String),
      taxCalculationMode: expect.any(String),
      customLineItems: expect.arrayContaining([]),
      locale: expect.any(String),
      deleteDaysAfterLastModification: null,
      shippingRateInput: null,
      origin: expect.any(String),
      shippingMode: expect.any(String),
      shipping: expect.arrayContaining([]),
      discountCodes: expect.arrayContaining([expect.any(String)]),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      cartState: expect.any(String),
      totalLineItemQuantity: expect.any(Number),
      shippingInfo: null,
      directDiscounts: expect.arrayContaining([]),
      taxedPrice: null,
      taxedShippingPrice: null,
      paymentInfo: null,
    })
  );
};
const validateRestModel = (model: TCartRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      customerGroup: expect.objectContaining({
        typeId: 'customer-group',
      }),
      businessUnit: expect.objectContaining({
        typeId: 'business-unit',
      }),
      refusedGifts: expect.arrayContaining([
        expect.objectContaining({
          typeId: 'cart-discount',
        }),
      ]),
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
      itemShippingAddresses: expect.arrayContaining([
        expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
      ]),
      totalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
    })
  );
};
const validateGraphqlModel = (model: TCartGraphql) => {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Cart',
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
          __typename: 'LineItem',
        }),
      ]),
      businessUnitRef: expect.objectContaining({
        typeId: 'business-unit',
        __typename: 'Reference',
      }),
      custom: expect.objectContaining({
        name: 'Boolean',
        __typename: 'BooleanCustomFieldType',
      }),
      customer: null,
      customerGroupRef: expect.objectContaining({
        typeId: 'customer-group',
        __typename: 'Reference',
      }),
      placement: null,
      refusedGiftsRefs: expect.arrayContaining([
        expect.objectContaining({
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
      ]),
      storeRef: expect.objectContaining({
        typeId: 'store',
        __typename: 'Reference',
      }),
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
      itemShippingAddresses: expect.arrayContaining([
        expect.objectContaining({
          city: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          __typename: 'Address',
        }),
      ]),
      totalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        __typename: 'Money',
      }),
      createdBy: expect.objectContaining({
        clientId: expect.any(String),
        customerRef: expect.objectContaining({ typeId: 'customer' }),
        userRef: expect.objectContaining({ typeId: 'user' }),
        __typename: 'Initiator',
      }),
      lastModifiedBy: expect.objectContaining({
        clientId: expect.any(String),
        customerRef: expect.objectContaining({ typeId: 'customer' }),
        userRef: expect.objectContaining({ typeId: 'user' }),
        __typename: 'Initiator',
      }),
    })
  );
};

describe('Cart model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(
      CartRest.random().lineItems([LineItem.random()])
    ).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(
      CartGraphql.random().lineItems([LineItem.random()])
    ).build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Cart model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(Cart.random()).buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateCommon(
      Cart.random().lineItems([LineItem.random()])
    ).buildGraphql<TCartGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
