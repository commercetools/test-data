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
      key: null,
      name: expect.any(String),
      description: null,
      localizedName: null,
      localizedDescription: null,
      taxCategory: expect.objectContaining({
        id: expect.any(String),
        typeId: 'tax-category',
      }),
      zoneRates: expect.arrayContaining([
        expect.objectContaining({
          zone: expect.objectContaining({
            typeId: 'zone',
          }),
        }),
      ]),
      isDefault: expect.any(Boolean),
      predicate: null,
      active: null,
      custom: null,
    })
  );
}

function validateGraphqlModel(model: TShippingMethodDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      key: null,
      name: expect.any(String),
      description: null,
      localizedName: null,
      localizedDescription: null,
      taxCategory: expect.objectContaining({
        typeId: 'tax-category',
      }),
      zoneRates: expect.arrayContaining([
        expect.objectContaining({
          zone: expect.objectContaining({
            typeId: 'zone',
          }),
        }),
      ]),
      isDefault: expect.any(Boolean),
      predicate: null,
      active: null,
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
