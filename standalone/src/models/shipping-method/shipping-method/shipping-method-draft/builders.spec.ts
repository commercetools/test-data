import type {
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';
import {
  ShippingMethodDraft,
  ShippingMethodDraftGraphql,
  ShippingMethodDraftRest,
} from '.';

function validateRestModel(model: TShippingMethodDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      localizedName: expect.objectContaining({
        en: expect.any(String),
      }),
      localizedDescription: expect.objectContaining({
        en: expect.any(String),
      }),
      taxCategory: null,
      zoneRates: null,
      isDefault: expect.any(Boolean),
      predicate: null,
      active: false,
      custom: null,
    })
  );
}

function validateGraphqlModel(model: TShippingMethodDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      localizedName: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      localizedDescription: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      taxCategory: null,
      zoneRates: null,
      isDefault: expect.any(Boolean),
      predicate: null,
      active: false,
      custom: null,
    })
  );
}

describe('ShippingMethodDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingMethodDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethodDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ShippingMethodDraft model compatibility builders', () => {
  it('builds a default model', () => {
    const model = ShippingMethodDraft.random().build();

    validateRestModel(model);
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethodDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ShippingMethodDraft.random().buildGraphql<TShippingMethodDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
