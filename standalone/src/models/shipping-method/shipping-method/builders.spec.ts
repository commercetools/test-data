import { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import type { TShippingMethodGraphql } from './types';
import {
  ShippingMethodRest,
  ShippingMethodGraphql,
  ShippingMethod,
} from './index';

describe('ShippingMethod model builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ShippingMethodRest.random()
      .localizedName(LocalizedString.random())
      .localizedDescription(LocalizedString.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        name: expect.any(String),
        description: null,
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
          id: expect.any(String),
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: null,
        active: false,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ShippingMethodGraphql.random()
      .localizedNameAllLocales(LocalizedString.random())
      .localizedDescriptionAllLocales(LocalizedString.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingMethod',
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        name: expect.any(String),
        description: null,
        localizedName: expect.any(String),
        localizedDescription: expect.any(String),
        localizedNameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        localizedDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        taxCategory: expect.objectContaining({
          __typename: 'TaxCategory',
        }),
        taxCategoryRef: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: null,
        active: false,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
      })
    );
  });
});

describe('ShippingMethod model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const model = ShippingMethod.random().build();

    expect(model).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        name: expect.any(String),
        description: null,
        localizedName: null,
        localizedDescription: null,
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: null,
        active: false,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
      })
    );
  });

  it('builds a REST model', () => {
    const restModel = ShippingMethod.random().buildRest();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        name: expect.any(String),
        description: null,
        localizedName: null,
        localizedDescription: null,
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: null,
        active: false,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          anonymousId: expect.any(String),
        }),
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = (
      ShippingMethod.random() as TBuilder<TShippingMethodGraphql>
    )
      .localizedNameAllLocales(LocalizedString.random())
      .localizedDescriptionAllLocales(LocalizedString.random())
      .buildGraphql();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingMethod',
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        name: expect.any(String),
        description: null,
        localizedName: expect.any(String),
        localizedDescription: expect.any(String),
        localizedNameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        localizedDescriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        taxCategory: expect.objectContaining({
          __typename: 'TaxCategory',
        }),
        taxCategoryRef: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: null,
        active: false,
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
      })
    );
  });
});
