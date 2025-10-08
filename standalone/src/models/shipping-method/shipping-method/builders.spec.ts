import { LocalizedString } from '@/models/commons';
import type { TShippingMethodGraphql, TShippingMethodRest } from './types';
import {
  ShippingMethodRest,
  ShippingMethodGraphql,
  ShippingMethod,
} from './index';

function validateCommonFields(
  model: TShippingMethodRest | TShippingMethodGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: null,
      name: expect.any(String),
      description: null,
      isDefault: expect.any(Boolean),
      predicate: null,
      active: false,
      custom: null,
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
    })
  );
}

function validateRestModel(model: TShippingMethodRest) {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      localizedName: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      localizedDescription: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
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
      createdBy: expect.objectContaining({
        anonymousId: expect.any(String),
      }),
      lastModifiedBy: expect.objectContaining({
        anonymousId: expect.any(String),
      }),
    })
  );
}

function validateGraphqlModel(model: TShippingMethodGraphql) {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'ShippingMethod',
      localizedName: expect.any(String),
      localizedDescription: expect.any(String),
      localizedNameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      localizedDescriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      taxCategory: expect.objectContaining({
        __typename: 'TaxCategory',
      }),
      taxCategoryRef: expect.objectContaining({
        typeId: 'tax-category',
      }),
      zoneRates: expect.arrayContaining([
        expect.objectContaining({
          zone: expect.objectContaining({
            __typename: 'Zone',
          }),
          shippingRates: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'ShippingRate',
            }),
          ]),
        }),
      ]),
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
    })
  );
}

describe('ShippingMethod model builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ShippingMethodRest.random()
      .localizedName(LocalizedString.random())
      .localizedDescription(LocalizedString.random())
      .build();

    validateRestModel(restModel);
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ShippingMethodGraphql.random()
      .localizedNameAllLocales(LocalizedString.random())
      .localizedDescriptionAllLocales(LocalizedString.random())
      .build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ShippingMethod model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const model = ShippingMethod.random()
      .localizedName(LocalizedString.random())
      .localizedDescription(LocalizedString.random())
      .build();

    validateRestModel(model);
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethod.random()
      .localizedName(LocalizedString.random())
      .localizedDescription(LocalizedString.random())
      .buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingMethod.random()
      .localizedName(LocalizedString.random())
      .localizedDescription(LocalizedString.random())
      .buildGraphql<TShippingMethodGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
