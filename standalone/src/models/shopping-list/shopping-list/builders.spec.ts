import type { TBuilder } from '@/core';
import { Company } from '@/models/business-unit';
import { KeyReference, ReferenceRest } from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { StoreGraphql } from '@/models/store';
import { CustomFieldBooleanType } from '@/models/type';
import {
  ShoppingListLineItemRest,
  ShoppingListLineItemGraphql,
} from '../shopping-list-line-item';
import { TextLineItemRest, TextLineItemGraphql } from '../text-line-item';
import type { TShoppingListRest, TShoppingListGraphql } from './types';
import { ShoppingListRest, ShoppingListGraphql, ShoppingList } from './index';

const populateCommon = <
  TModel extends TShoppingListRest | TShoppingListGraphql,
>(
  model: TBuilder<TModel>
) => model.custom(CustomFieldBooleanType.random());

const populateRestModel = (model: TBuilder<TShoppingListRest>) =>
  populateCommon(model)
    .businessUnit(KeyReference.presets.businessUnit())
    .customer(ReferenceRest.presets.customerReference())
    .store(KeyReference.presets.store());

const populateGraphqlModel = (model: TBuilder<TShoppingListGraphql>) =>
  populateCommon(model)
    .businessUnit(Company.random())
    .customer(Customer.random())
    .store(StoreGraphql.random());

const validateCommonFields = (
  model: TShoppingListRest | TShoppingListGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
        }),
      ]),
      textLineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
        }),
      ]),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
    })
  );
};

const validateRestModel = (model: TShoppingListRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      businessUnit: expect.objectContaining({
        key: expect.any(String),
      }),
      store: expect.objectContaining({
        key: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (model: TShoppingListGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      businessUnitRef: expect.objectContaining({
        __typename: 'Reference',
        key: expect.any(String),
      }),
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      customerRef: expect.objectContaining({
        __typename: 'Reference',
        id: expect.any(String),
      }),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ShoppingListLineItem',
        }),
      ]),
      textLineItems: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'TextLineItem',
        }),
      ]),
      storeRef: expect.objectContaining({
        __typename: 'Reference',
        key: expect.any(String),
      }),
      __typename: 'ShoppingList',
    })
  );
};

describe('ShoppingList model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(
      ShoppingListRest.random()
        .lineItems([ShoppingListLineItemRest.random()])
        .textLineItems([TextLineItemRest.random()])
    ).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(
      ShoppingListGraphql.random()
        .lineItems([ShoppingListLineItemGraphql.random()])
        .textLineItems([TextLineItemGraphql.random()])
    ).build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ShoppingList model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(
      ShoppingList.random()
        .lineItems([ShoppingListLineItemRest.random()])
        .textLineItems([TextLineItemRest.random()])
    ).buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateRestModel(
      ShoppingList.random()
        .lineItems([ShoppingListLineItemGraphql.random()])
        .textLineItems([TextLineItemGraphql.random()])
    ).buildGraphql<TShoppingListGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
