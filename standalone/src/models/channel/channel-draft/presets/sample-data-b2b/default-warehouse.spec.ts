import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './default-warehouse';

describe(`with defaultWarehouse preset`, () => {
  it(`should return a defaultWarehouse preset when built for rest`, () => {
    const defaultWarehousePreset = presets.restPreset().build();
    expect(defaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Standardlager",
          "en": undefined,
          "en-AU": "Default warehouse",
          "en-GB": "Default warehouse",
          "en-NZ": "Default warehouse",
          "en-US": "Default warehouse",
          "es-ES": "Almacén predeterminado",
          "fr": undefined,
          "fr-FR": "Entrepôt par défaut",
          "it-IT": "Magazzino predefinito",
          "nl-NL": "Standaard magazijn",
          "pt-PT": "Armazém padrão",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a defaultWarehouse preset when built for graphql`, () => {
    const defaultWarehousePreset = presets.graphqlPreset().build();
    expect(defaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Standardlager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino predefinito",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt par défaut",
          },
          {
            "locale": "en-AU",
            "value": "Default warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén predeterminado",
          },
          {
            "locale": "en-GB",
            "value": "Default warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "Default warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém padrão",
          },
          {
            "locale": "en-US",
            "value": "Default warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a defaultWarehouse preset when built for legacy rest`, () => {
    const defaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TChannelDraftRest>();
    expect(defaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Standardlager",
          "en": undefined,
          "en-AU": "Default warehouse",
          "en-GB": "Default warehouse",
          "en-NZ": "Default warehouse",
          "en-US": "Default warehouse",
          "es-ES": "Almacén predeterminado",
          "fr": undefined,
          "fr-FR": "Entrepôt par défaut",
          "it-IT": "Magazzino predefinito",
          "nl-NL": "Standaard magazijn",
          "pt-PT": "Armazém padrão",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a defaultWarehouse preset when built for legacy graphql`, () => {
    const defaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(defaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "default-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Standardlager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino predefinito",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt par défaut",
          },
          {
            "locale": "en-AU",
            "value": "Default warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén predeterminado",
          },
          {
            "locale": "en-GB",
            "value": "Default warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "Default warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém padrão",
          },
          {
            "locale": "en-US",
            "value": "Default warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });
});
