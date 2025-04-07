import { TBuilder } from '@commercetools-test-data/core';
import { TaxRate } from '@commercetools-test-data/tax-category';
import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import { TaxedItemPriceGraphql, TaxedItemPriceRest } from '../index';
import { TLineItemGraphql, TLineItemRest } from './types';
import { LineItemRest, LineItemGraphql } from './index';

const populateRestModel = (model: TBuilder<TLineItemRest>) =>
  model
    .taxRate(TaxRate.random())
    .taxedPrice(TaxedItemPriceRest.random())
    .custom(CustomFieldBooleanType.random());

const populateGraphqlModel = (model: TBuilder<TLineItemGraphql>) =>
  model
    .taxRate(TaxRate.random())
    .taxedPrice(TaxedItemPriceGraphql.random())
    .custom(CustomFieldBooleanType.random());

const validateCommonFields = (model: TLineItemRest | TLineItemGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      productId: expect.any(String),
      productKey: expect.any(String),
      productType: expect.objectContaining({
        typeId: 'product-type',
      }),
      variant: expect.objectContaining({
        attributes: expect.any(Array),
      }),
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
      }),
      quantity: expect.any(Number),
      addedAt: expect.any(String),
      state: [],
      taxRate: expect.objectContaining({
        id: expect.any(String),
        amount: expect.any(Number),
      }),
      perMethodTaxRate: [],
      supplyChannel: expect.objectContaining({
        id: expect.any(String),
        typeId: 'channel',
      }),
      distributionChannel: expect.objectContaining({
        id: expect.any(String),
        typeId: 'channel',
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

const validateGraphqlFields = (model: TLineItemGraphql) => {
  validateCommonFields(model);
  //   expect(model).toEqual({
  //     price: expect.objectContaining({
  //       __typename: 'ProductPrice',
  //     }),
  //     taxedPrice: expect.objectContaining({
  //       __typename: 'Money',
  //     }),
  //     taxRate: expect.objectContaining({
  //       __typename: 'TaxRate',
  //     }),
  //     variant: expect.objectContaining({
  //       __typename: 'ProductVariant',
  //     }),
  //     supplyChannel: expect.objectContaining({
  //       __typename: 'Channel',
  //     }),
  //     distributionChannel: expect.objectContaining({
  //       __typename: 'Channel',
  //     }),
  //     productSlug: expect.any(String),
  //     productType: expect.objectContaining({
  //       __typename: 'ProductType',
  //     }),
  //     distributionChannelRef: expect.objectContaining({
  //       id: expect.any(String),
  //       typeId: 'channel',
  //       __typename: 'Reference',
  //     }),
  //     nameAllLocales: expect.arrayContaining([
  //       {
  //         __typename: 'LocalizedString',
  //         locale: expect.any(String),
  //         value: expect.any(String),
  //       },
  //     ]),
  //     productSlugAllLocales: expect.arrayContaining([
  //       {
  //         __typename: 'LocalizedString',
  //         locale: expect.any(String),
  //         value: expect.any(String),
  //       },
  //     ]),
  //     productTypeRef: expect.objectContaining({
  //       id: expect.any(String),
  //       typeId: 'product',
  //       __typename: 'Reference',
  //     }),
  //     supplyChannelRef: expect.objectContaining({
  //       id: expect.any(String),
  //       typeId: 'channel',
  //       __typename: 'Reference',
  //     }),
  //     __typename: 'LineItem',
  //   });
};

describe('LineItem model builders', () => {
  it('builds a REST model', () => {
    const model = populateRestModel(LineItemRest.random()).build();
    console.log(model);
    validateCommonFields(model);
  });

  it('builds a GraphQL model', () => {
    const model = populateGraphqlModel(LineItemGraphql.random()).build();
    console.log(model);
    validateGraphqlFields(model);
  });
});
