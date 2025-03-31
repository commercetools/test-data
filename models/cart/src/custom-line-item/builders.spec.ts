import { Money, LocalizedString } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { TaxCategory } from '@commercetools-test-data/tax-category';
import {
  TCustomLineItem,
  TCustomLineItemRest,
  TCustomLineItemGraphql,
} from './types';
import {
  CustomLineItemRest,
  CustomLineItemGraphql,
  CustomLineItem,
} from './index';

const populateCommonFields = <
  TModel extends TCustomLineItem | TCustomLineItemGraphql | TCustomLineItemRest,
>(
  model: TBuilder<TModel>
) => model.money(Money.random());

const populateGraphqlFields = (model: TBuilder<TCustomLineItemGraphql>) =>
  populateCommonFields(model)
    .nameAllLocales(LocalizedString.random())
    .taxCategory(TaxCategory.random());

const populateRestFields = (model: TBuilder<TCustomLineItemRest>) =>
  populateCommonFields(model);

const validateCommonFields = (
  model: TCustomLineItemGraphql | TCustomLineItemRest
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      taxedPrice: null,
      taxedPricePortions: expect.arrayContaining([]),
      totalPrice: null,
      slug: expect.any(String),
      quantity: expect.any(Number),
      state: expect.arrayContaining([]),
      taxRate: null,
      perMethodTaxRate: expect.arrayContaining([]),
      discountedPricePerQuantity: expect.arrayContaining([]),
      shippingDetails: null,
      priceMode: expect.any(String),
      custom: null,
    })
  );
};

const validateGraphqlFields = (model: TCustomLineItemGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'CustomLineItem',
      name: expect.any(String),
      taxCategory: expect.objectContaining({
        __typename: 'TaxCategory',
        id: expect.any(String),
      }),
      money: expect.objectContaining({
        __typename: 'Money',
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
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
      money: expect.objectContaining({
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
      }),
    })
  );
};
describe('CustomLineItem model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestFields(
      CustomLineItemRest.random()
    ).buildRest();
    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlFields(
      CustomLineItemGraphql.random()
    ).buildGraphql();
    console.log(graphqlModel);
    validateGraphqlFields(graphqlModel);
  });
});

describe('CustomLineItem compatibility builder', () => {
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
