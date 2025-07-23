import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../types';
import {
  ProductVariantDraft,
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from './index';

function validateModel(
  model:
    | TProductVariantDraftRest
    | TProductVariantDraftGraphql
    | TProductVariantDraft
) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      sku: expect.any(String),
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
        }),
      ]),
      assets: expect.arrayContaining([]),
    })
  );
}

function validateRestModel(restModel: TProductVariantDraftRest) {
  validateModel(restModel);
  expect(restModel).toEqual(
    expect.objectContaining({
      images: expect.arrayContaining([
        expect.objectContaining({
          label: expect.any(String),
          url: expect.any(String),
          dimensions: expect.objectContaining({
            w: expect.any(Number),
            h: expect.any(Number),
          }),
        }),
      ]),
      prices: expect.arrayContaining([
        expect.objectContaining({
          value: expect.any(Object),
        }),
      ]),
    })
  );
}

function validateGraphqlModel(graphqlModel: TProductVariantDraftGraphql) {
  validateModel(graphqlModel);
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      images: expect.arrayContaining([
        expect.objectContaining({
          label: expect.any(String),
          url: expect.any(String),
          dimensions: expect.objectContaining({
            width: expect.any(Number),
            height: expect.any(Number),
          }),
        }),
      ]),
      prices: expect.arrayContaining([
        expect.objectContaining({
          value: {
            centPrecision: expect.any(Object),
            highPrecision: expect.any(Object),
          },
        }),
      ]),
    })
  );
}

describe('ProductVariantDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ProductVariantDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ProductVariantDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductVariantDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ProductVariantDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ProductVariantDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ProductVariantDraft.random().buildGraphql<TProductVariantDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
