import { TBuilder } from '@/core';
import { ReferenceRest } from '@/models/commons';
import { TaxCategory } from '@/models/tax-category';
import { CustomFieldBooleanType } from '@/models/type';
import { TCustomLineItemRest, TCustomLineItemGraphql } from './types';
import {
  CustomLineItemRest,
  CustomLineItemGraphql,
  CustomLineItem,
} from './index';

const populateGraphqlFields = (model: TBuilder<TCustomLineItemGraphql>) =>
  model
    .custom(CustomFieldBooleanType.random())
    .taxCategory(TaxCategory.random());

const populateRestFields = (model: TBuilder<TCustomLineItemRest>) =>
  model
    .custom(CustomFieldBooleanType.random())
    .taxCategory(ReferenceRest.random().typeId('tax-category'));

const validateCommonFields = (
  model: TCustomLineItemGraphql | TCustomLineItemRest
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      taxedPrice: null,
      taxedPricePortions: expect.arrayContaining([]),
      money: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        type: 'centPrecision',
        fractionDigits: expect.any(Number),
      }),
      totalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        type: 'centPrecision',
        fractionDigits: expect.any(Number),
      }),
      slug: expect.any(String),
      quantity: expect.any(Number),
      state: expect.arrayContaining([]),
      taxCategory: expect.objectContaining({
        id: expect.any(String),
      }),
      taxRate: null,
      perMethodTaxRate: expect.arrayContaining([]),
      discountedPricePerQuantity: expect.arrayContaining([]),
      shippingDetails: null,
      priceMode: expect.any(String),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
    })
  );
};

const validateGraphqlFields = (model: TCustomLineItemGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      __typename: 'CustomLineItem',
      name: expect.any(String),
      totalPrice: expect.objectContaining({
        __typename: 'Money',
      }),
      taxCategory: expect.objectContaining({
        __typename: 'TaxCategory',
      }),
      money: expect.objectContaining({
        __typename: 'Money',
      }),
      taxCategoryRef: expect.objectContaining({
        __typename: 'Reference',
        id: expect.any(String),
        typeId: 'tax-category',
      }),
    })
  );
};

const validateRestFields = (model: TCustomLineItemRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
      taxCategory: expect.objectContaining({
        typeId: 'tax-category',
        obj: expect.objectContaining({
          id: expect.any(String),
        }),
      }),
    })
  );
};

describe('CustomLineItem model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestFields(
      CustomLineItemRest.random()
    ).buildRest();
    console.log(restModel);
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlFields(
      CustomLineItemGraphql.random()
    ).buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});

describe('CustomLineItem compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const defaultModel = populateRestFields(CustomLineItem.random()).build();
    validateRestFields(defaultModel);
  });

  it('builds a REST model', () => {
    const restModel = populateRestFields(CustomLineItem.random()).buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlFields(
      CustomLineItem.random()
    ).buildGraphql();
    validateGraphqlFields(graphqlModel);
  });
});
