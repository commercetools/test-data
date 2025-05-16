import type { TBuilder } from '@/core';
import { Company } from '@/models/business-unit';
import { KeyReference, Reference } from '@/models/commons';
import { CustomerGroup } from '@/models/customer-group';
import { CustomFieldBooleanType } from '@/models/type';
import { LineItem } from '../line-item';
import { cartState } from './constants';
import type { TCart, TCartGraphql, TCartRest } from './types';
import { Cart, CartGraphql, CartRest } from './index';

const populateCommon = <TModel extends TCart | TCartRest | TCartGraphql>(
  model: TBuilder<TModel>
) =>
  model
    .custom(CustomFieldBooleanType.random())
    .cartState(cartState.Active)
    .locale('en-US');

const populateRestModel = (model: TBuilder<TCartRest>) =>
  populateCommon(model)
    .customerGroup(Reference.random().typeId('customer-group'))
    .businessUnit(KeyReference.random().typeId('business-unit'));

const populateGraphqlModel = (model: TBuilder<TCartGraphql>) =>
  populateCommon(model)
    .customerGroup(CustomerGroup.random())
    .businessUnit(Company.random());

const validateCommonFields = (model: TCartRest | TCartGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      customerId: expect.any(String),
      customerEmail: expect.any(String),
      anonymousId: expect.any(String),
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
      discountTypeCombination: null,
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
      store: expect.objectContaining({
        typeId: 'store',
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
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      customer: null,
      placement: null,
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LineItem',
        }),
      ]),
      shippingAddress: expect.objectContaining({
        __typename: 'Address',
      }),
      billingAddress: expect.objectContaining({
        __typename: 'Address',
      }),
      itemShippingAddresses: expect.arrayContaining([
        expect.objectContaining({
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
      businessUnitRef: expect.objectContaining({
        typeId: 'business-unit',
        __typename: 'Reference',
      }),
      customerGroupRef: expect.objectContaining({
        typeId: 'customer-group',
        __typename: 'Reference',
      }),
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
      businessUnit: expect.objectContaining({
        id: expect.any(String),
        __typename: 'BusinessUnit',
      }),
      customerGroup: expect.objectContaining({
        id: expect.any(String),
        __typename: 'CustomerGroup',
      }),
      refusedGifts: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          __typename: 'CartDiscount',
        }),
      ]),
      store: expect.objectContaining({
        id: expect.any(String),
        __typename: 'Store',
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
    const restModel = populateRestModel(
      Cart.random().lineItems([LineItem.random()])
    ).buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateCommon(
      Cart.random().lineItems([LineItem.random()])
    ).buildGraphql<TCartGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
