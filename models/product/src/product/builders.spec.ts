import {
  Product,
  ProductGraphql,
  ProductRest,
  TProductGraphql,
  TProductRest,
} from './index';

function validateRestModel(restModel: TProductRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      reviewRatingStatistics: null,
      masterData: expect.objectContaining({
        current: expect.objectContaining({
          categories: expect.arrayContaining([]),
        }),
      }),
      priceMode: expect.any(String),
      state: null,
      taxCategory: expect.objectContaining({
        typeId: 'tax-category',
        id: expect.any(String),
        obj: expect.objectContaining({
          id: expect.any(String),
        }),
      }),
      productType: expect.objectContaining({
        typeId: 'product-type',
        id: expect.any(String),
        obj: expect.objectContaining({
          id: expect.any(String),
        }),
      }),
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
    })
  );
}

function validateGraphqlModel(graphqlModel: TProductGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      reviewRatingStatistics: null,
      masterData: expect.objectContaining({
        __typename: 'ProductCatalogData',
      }),
      priceMode: expect.any(String),
      state: null,
      stateRef: null,
      taxCategory: expect.objectContaining({
        __typename: 'TaxCategory',
      }),
      taxCategoryRef: expect.objectContaining({
        typeId: 'tax-category',
        __typename: 'Reference',
      }),
      productType: expect.objectContaining({
        __typename: 'ProductTypeDefinition',
      }),
      productTypeRef: expect.objectContaining({
        typeId: 'product-type',
        __typename: 'Reference',
      }),
      skus: expect.arrayContaining([]),
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      __typename: 'Product',
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Product model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = Product.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = Product.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Product.random().buildGraphql<TProductGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
