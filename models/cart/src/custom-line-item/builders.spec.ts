import { Money, LocalizedString } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { TaxCategory } from '@commercetools-test-data/tax-category';
import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import { TCustomLineItemRest, TCustomLineItemGraphql } from './types';
import {
  CustomLineItemRest,
  CustomLineItemGraphql,
  CustomLineItem,
} from './index';

const populateGraphqlFields = (model: TBuilder<TCustomLineItemGraphql>) =>
  model
    .custom(CustomFieldBooleanType.random())
    .nameAllLocales(LocalizedString.random())
    .taxCategory(TaxCategory.random());

const populateRestFields = (model: TBuilder<TCustomLineItemRest>) =>
  model.custom(CustomFieldBooleanType.random());

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
        __typename: 'BooleanCustomFieldType',
      }),
      __typename: 'CustomLineItem',
      name: expect.any(String),
      totalPrice: expect.objectContaining({
        __typename: 'Money',
      }),
      taxCategory: expect.objectContaining({
        __typename: 'TaxCategory',
        id: expect.any(String),
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
      taxCategory: null,
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
