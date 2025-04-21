import {
  ProductVariant,
  ProductVariantGraphql,
  ProductVariantRest,
  TProductVariant,
  TProductVariantGraphql,
  TProductVariantRest,
} from './index';

const validateRestModel = (model: TProductVariant | TProductVariantRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      availability: null,
      assets: [],
      id: expect.any(Number),
      images: expect.arrayContaining([
        expect.objectContaining({
          url: expect.any(String),
          dimensions: expect.objectContaining({
            w: expect.any(Number),
            h: expect.any(Number),
          }),
        }),
      ]),
      key: expect.any(String),
      price: null,
      prices: expect.arrayContaining([
        expect.objectContaining({
          value: expect.any(Object),
        }),
      ]),
      sku: expect.any(String),
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
        }),
      ]),
      isMatchingVariant: expect.any(Boolean),
      scopedPrice: null,
      scopedPriceDiscounted: null,
    })
  );
};

const validateGraphqlModel = (
  model: TProductVariantRest | TProductVariantGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      availability: null,
      assets: [],
      id: expect.any(Number),
      images: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Image',
        }),
      ]),
      key: expect.any(String),
      price: null,
      prices: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ProductPrice',
        }),
      ]),
      sku: expect.any(String),
      attributesRaw: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          __typename: 'RawProductAttribute',
        }),
      ]),
      __typename: 'ProductVariant',
    })
  );
};

describe('ProductVariant model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductVariantRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductVariantGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductVariant model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductVariant.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductVariant.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductVariant.random().buildGraphql();

    validateGraphqlModel(graphqlModel);
  });
});
