import type { TBuilder } from '@/core';
import { Company } from '@/models/business-unit';
import { LineItem, LineItemRest, LineItemGraphql } from '@/models/cart/cart';
import { KeyReference, Reference } from '@/models/commons';
import { CustomerGroup } from '@/models/customer/customer-group';
import { CustomFieldBooleanType } from '@/models/type';
import {
  orderOrigin,
  orderState,
  paymentState,
  shipmentState,
} from './constants';
import type { TOrderGraphql, TOrderRest } from './types';
import { Order, OrderGraphql, OrderRest } from './index';

const populateCommon = <TModel extends TOrderRest | TOrderGraphql>(
  model: TBuilder<TModel>
) =>
  model
    .custom(CustomFieldBooleanType.random())
    .orderState(orderState.Open)
    .paymentState(paymentState.Pending)
    .shipmentState(shipmentState.Pending)
    .locale('en-US');

const populateRestModel = (model: TBuilder<TOrderRest>) =>
  populateCommon(model)
    .customerGroup(Reference.random().typeId('customer-group'))
    .businessUnit(KeyReference.random().typeId('business-unit'));

const populateGraphqlModel = (model: TBuilder<TOrderGraphql>) =>
  populateCommon(model)
    .customerGroup(CustomerGroup.random())
    .businessUnit(Company.random());

const validateCommonFields = (model: TOrderRest | TOrderGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      orderNumber: expect.any(String),
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
      origin: orderOrigin.Customer,
      shippingMode: expect.any(String),
      shipping: expect.arrayContaining([]),
      discountCodes: expect.arrayContaining([]),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      orderState: expect.any(String),
      paymentState: expect.any(String),
      shipmentState: expect.any(String),
      shippingInfo: null,
      directDiscounts: expect.arrayContaining([]),
      taxedPrice: null,
      taxedShippingPrice: null,
      paymentInfo: null,
      discountOnTotalPrice: null,
      completedAt: null,
      quote: null,
      state: null,
      store: null,
      syncInfo: expect.arrayContaining([]),
      returnInfo: expect.arrayContaining([]),
      discountTypeCombination: null,
      lastMessageSequenceNumber: expect.any(Number),
    })
  );
};

const validateRestModel = (model: TOrderRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      customerGroup: expect.objectContaining({
        typeId: 'customer-group',
      }),
      cart: expect.objectContaining({
        typeId: 'cart',
      }),
      businessUnit: expect.objectContaining({
        key: expect.any(String),
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

const validateGraphqlModel = (model: TOrderGraphql) => {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Order',
      billingAddress: expect.objectContaining({
        __typename: 'Address',
      }),
      businessUnit: expect.objectContaining({
        id: expect.any(String),
        __typename: 'BusinessUnit',
      }),
      businessUnitRef: expect.objectContaining({
        typeId: 'business-unit',
        __typename: 'Reference',
      }),
      cart: expect.objectContaining({
        id: expect.any(String),
        __typename: 'Cart',
      }),
      cartRef: expect.objectContaining({
        typeId: 'cart',
        __typename: 'Reference',
      }),
      customer: expect.objectContaining({
        __typename: 'Customer',
      }),
      customerGroup: expect.objectContaining({
        id: expect.any(String),
        __typename: 'CustomerGroup',
      }),
      customerGroupRef: expect.objectContaining({
        typeId: 'customer-group',
        __typename: 'Reference',
      }),
      itemShippingAddresses: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Address',
        }),
      ]),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LineItem',
        }),
      ]),
      refusedGifts: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          __typename: 'CartDiscount',
        }),
      ]),
      refusedGiftsRefs: expect.arrayContaining([
        expect.objectContaining({
          typeId: 'cart-discount',
          __typename: 'Reference',
        }),
      ]),
      shippingAddress: expect.objectContaining({
        __typename: 'Address',
      }),
      storeRef: null,
      totalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        __typename: 'Money',
      }),
    })
  );
};

describe('Order model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(
      OrderRest.random().lineItems([LineItemRest.random()])
    ).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(
      OrderGraphql.random().lineItems([LineItemGraphql.random()])
    ).build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Order model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(
      Order.random().lineItems([LineItem.random()])
    ).buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateCommon(
      Order.random().lineItems([LineItem.random()])
    ).buildGraphql<TOrderGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
