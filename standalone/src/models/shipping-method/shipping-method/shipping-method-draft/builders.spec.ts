import type {
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';
import { ShippingMethodDraftRest, ShippingMethodDraftGraphql } from './index';

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
      __typename: 'ShippingMethodDraft',
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      localizedName: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      localizedDescription: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      localizedNameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
      ]),
      localizedDescriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
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
  it('builds a default (REST) model', () => {
    const compatModel = ShippingMethodDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethodDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethodDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
