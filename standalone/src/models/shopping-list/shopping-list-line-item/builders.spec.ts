import { TBuilder } from '@/core';
import { CustomFieldBooleanType } from '@/models/type';
import {
  TShoppingListLineItemRest,
  TShoppingListLineItemGraphql,
} from './types';
import { ShoppingListLineItemRest, ShoppingListLineItemGraphql } from './index';

const populateRestModel = (model: TBuilder<TShoppingListLineItemRest>) =>
  model.custom(CustomFieldBooleanType.random());

const populateGraphqlModel = (model: TBuilder<TShoppingListLineItemGraphql>) =>
  model.custom(CustomFieldBooleanType.random());

const validateCommonFields = (
  model: TShoppingListLineItemRest | TShoppingListLineItemGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      addedAt: expect.any(String),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      id: expect.any(String),
      productId: expect.any(String),
      published: expect.any(Boolean),
      quantity: expect.any(Number),
      variantId: expect.any(Number),
    })
  );
};

const validateRestFields = (model: TShoppingListLineItemRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      variant: expect.objectContaining({
        attributes: expect.any(Array),
      }),
      productType: expect.objectContaining({
        id: expect.any(String),
        typeId: 'product-type',
      }),
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
      productSlug: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlFields = (model: TShoppingListLineItemGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      productSlug: expect.any(String),
      variant: expect.objectContaining({
        sku: expect.any(String),
        attributesRaw: expect.any(Array),
        __typename: 'ProductVariant',
      }),
      productType: expect.objectContaining({
        id: expect.any(String),
        __typename: 'ProductTypeDefinition',
      }),
      nameAllLocales: expect.arrayContaining([
        {
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        },
      ]),
      productSlugAllLocales: expect.arrayContaining([
        {
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        },
      ]),
      productTypeRef: expect.objectContaining({
        id: expect.any(String),
        typeId: 'product',
        __typename: 'Reference',
      }),
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      __typename: 'ShoppingListLineItem',
    })
  );
};

describe('ShoppingListLineItem model builders', () => {
  it('builds a REST model', () => {
    const model = populateRestModel(ShoppingListLineItemRest.random()).build();
    validateRestFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = populateGraphqlModel(
      ShoppingListLineItemGraphql.random()
    ).build();
    validateGraphqlFields(model);
  });
});
