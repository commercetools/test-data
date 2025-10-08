import type {
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';
import {
  ShippingMethodDraft,
  ShippingMethodDraftGraphql,
  ShippingMethodDraftRest,
} from '.';

function validateModel(
  model: TShippingMethodDraftRest | TShippingMethodDraftGraphql
) {
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

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethodDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('ShippingMethodDraft model compatibility builders', () => {
  it('builds a default model', () => {
    const model = ShippingMethodDraft.random().build();

    validateModel(model);
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethodDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ShippingMethodDraft.random().buildGraphql<TShippingMethodDraftGraphql>();

    validateModel(graphqlModel);
  });
});
