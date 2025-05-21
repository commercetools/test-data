import { TBuilder } from '@/core';
import { CustomFieldBooleanType } from '@/models/type';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../index';
import { TLineItemGraphql, TLineItemRest } from './types';
import { LineItem, LineItemRest, LineItemGraphql } from './index';

const populateRestModel = (model: TBuilder<TLineItemRest>) =>
  model
    .taxedPrice(TaxedItemPriceRest.random())
    .custom(CustomFieldBooleanType.random());

const populateGraphqlModel = (model: TBuilder<TLineItemGraphql>) =>
  model
    .taxedPrice(TaxedItemPriceGraphql.random())
    .custom(CustomFieldBooleanType.random());

const validateCommonFields = (model: TLineItemRest | TLineItemGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      productId: expect.any(String),
      productKey: expect.any(String),
      price: expect.objectContaining({
        id: expect.any(String),
        value: expect.any(Object),
      }),
      taxedPrice: expect.objectContaining({
        totalGross: expect.any(Object),
        totalNet: expect.any(Object),
        totalTax: expect.any(Object),
        taxPortions: expect.any(Array),
      }),
      taxedPricePortions: [],
      totalPrice: expect.objectContaining({
        centAmount: expect.any(Number),
        type: 'centPrecision',
      }),
      quantity: expect.any(Number),
      addedAt: expect.any(String),
      state: [],
      taxRate: expect.objectContaining({
        id: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
      }),
      perMethodTaxRate: [],
      supplyChannel: expect.objectContaining({
        id: expect.any(String),
      }),
      distributionChannel: expect.objectContaining({
        id: expect.any(String),
      }),
      discountedPricePerQuantity: [],
      priceMode: expect.any(String),
      lineItemMode: expect.any(String),
      inventoryMode: expect.any(String),
      shippingDetails: null,
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      lastModifiedAt: expect.any(String),
    })
  );
};

const validateRestFields = (model: TLineItemRest) => {
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
      supplyChannel: expect.objectContaining({
        id: expect.any(String),
      }),
      distributionChannel: expect.objectContaining({
        id: expect.any(String),
      }),
    })
  );
};

const validateGraphqlFields = (model: TLineItemGraphql) => {
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
      price: expect.objectContaining({
        __typename: 'ProductPrice',
      }),
      taxedPrice: expect.objectContaining({
        __typename: 'TaxedItemPrice',
      }),
      totalPrice: expect.objectContaining({
        __typename: 'Money',
      }),
      taxRate: expect.objectContaining({
        __typename: 'TaxRate',
      }),
      supplyChannel: expect.objectContaining({
        roles: expect.arrayContaining([expect.any(String)]),
        __typename: 'Channel',
      }),
      distributionChannel: expect.objectContaining({
        roles: expect.arrayContaining([expect.any(String)]),
        __typename: 'Channel',
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
      distributionChannelRef: expect.objectContaining({
        id: expect.any(String),
        typeId: 'channel',
        __typename: 'Reference',
      }),
      supplyChannelRef: expect.objectContaining({
        id: expect.any(String),
        typeId: 'channel',
        __typename: 'Reference',
      }),
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      __typename: 'LineItem',
    })
  );
};

describe('LineItem model builders', () => {
  it('builds a REST model', () => {
    const model = populateRestModel(LineItemRest.random()).build();
    validateRestFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = populateGraphqlModel(LineItemGraphql.random()).build();
    validateGraphqlFields(model);
  });
});

describe('LineItem compatibility builder', () => {
  it('builds a DEFAULT model', () => {
    const model = populateRestModel(LineItem.random()).build();
    validateRestFields(model);
  });

  it('builds a REST model', () => {
    const model = populateRestModel(LineItem.random()).buildRest();
    validateRestFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = populateGraphqlModel(LineItem.random()).buildGraphql();
    validateGraphqlFields(model);
  });
});
