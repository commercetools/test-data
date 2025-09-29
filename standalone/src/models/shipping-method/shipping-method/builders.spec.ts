import type { TShippingMethodRest, TShippingMethodGraphql } from './types';
import { ShippingMethodRest, ShippingMethodGraphql } from './index';

function validateRestModel(model: TShippingMethodRest) {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      name: expect.any(String),
      localizedName: expect.objectContaining({
        en: expect.any(String),
      }),
      localizedDescription: expect.objectContaining({
        en: expect.any(String),
      }),
      taxCategory: expect.objectContaining({
        id: expect.any(String),
      }),
      zoneRates: expect.any(Array),
      isDefault: expect.any(Boolean),
      predicate: expect.any(String),
      active: false,
      custom: null,
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
    })
  );
}

function validateGraphqlModel(model: TShippingMethodGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'ShippingMethod',
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      name: expect.any(String),
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
      taxCategory: expect.objectContaining({
        id: expect.any(String),
        typeId: 'tax-category',
      }),
      taxCategoryRef: expect.objectContaining({
        id: expect.any(String),
        typeId: 'tax-category',
      }),
      zoneRates: expect.any(Array),
      isDefault: expect.any(Boolean),
      predicate: expect.any(String),
      active: false,
      custom: null,
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        userRef: expect.objectContaining({
          typeId: 'user',
          __typename: 'Reference',
        }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        userRef: expect.objectContaining({
          typeId: 'user',
          __typename: 'Reference',
        }),
      }),
    })
  );
}

describe('ShippingMethod model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingMethodRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethodGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ShippingMethod model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ShippingMethodRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethodRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethodGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
