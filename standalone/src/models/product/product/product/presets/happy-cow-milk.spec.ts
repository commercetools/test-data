import { TProductGraphql, TProductRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './happy-cow-milk';

function validateRestModel(restModel: TProductRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      key: 'happy-cow-milk-key',
      masterData: expect.objectContaining({
        current: expect.objectContaining({
          slug: expect.objectContaining({
            en: 'happy-cow-milk-slug',
          }),
        }),
        published: true,
      }),
      productType: expect.objectContaining({
        typeId: 'product-type',
        id: expect.any(String),
        obj: expect.objectContaining({
          id: expect.any(String),
          name: 'Milk Product Type',
        }),
      }),
    })
  );
}

function validateGraphqlModel(graphqlModel: TProductGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      key: 'happy-cow-milk-key',
      masterData: expect.objectContaining({
        current: expect.objectContaining({
          __typename: 'ProductData',
        }),
        published: true,
        __typename: 'ProductCatalogData',
      }),
      productType: expect.objectContaining({
        name: 'Milk Product Type',
        __typename: 'ProductTypeDefinition',
      }),
      productTypeRef: expect.objectContaining({
        typeId: 'product-type',
        __typename: 'Reference',
      }),
      __typename: 'Product',
    })
  );
}

describe('Product "happy cow milk" presets', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Product "happy cow milk" compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const compatModel = compatPreset().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql<TProductGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
