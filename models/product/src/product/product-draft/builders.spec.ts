import type { TProductDraftGraphql, TProductDraftRest } from '../types';
import { ProductDraft, ProductDraftGraphql, ProductDraftRest } from './index';

function validateRestModel(restModel: TProductDraftRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      slug: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      description: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      categories: expect.arrayContaining([
        expect.objectContaining({
          typeId: 'category',
        }),
      ]),
      categoryOrderHints: null,
      masterVariant: expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
          }),
        ]),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ]),
        assets: expect.arrayContaining([]),
      }),
      variants: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
        }),
      ]),
      state: expect.objectContaining({
        typeId: 'state',
      }),
      productType: expect.objectContaining({
        typeId: 'product-type',
      }),
      searchKeywords: null,
      metaTitle: null,
      metaDescription: null,
      metaKeywords: null,
      publish: expect.any(Boolean),
      key: expect.any(String),
    })
  );
}

function validateGraphqlModel(graphqlModel: TProductDraftGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      slug: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      description: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      categories: expect.arrayContaining([
        expect.objectContaining({
          typeId: 'category',
        }),
      ]),
      categoryOrderHints: null,
      masterVariant: expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
          }),
        ]),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ]),
        assets: expect.arrayContaining([]),
      }),
      variants: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
        }),
      ]),
      state: expect.objectContaining({
        typeId: 'state',
      }),
      productType: expect.objectContaining({
        typeId: 'product-type',
      }),
      searchKeywords: null,
      metaTitle: null,
      metaDescription: null,
      metaKeywords: null,
      publish: expect.any(Boolean),
      key: expect.any(String),
    })
  );
}

describe('ProductDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ProductDraft.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductDraft.random().buildGraphql<TProductDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
