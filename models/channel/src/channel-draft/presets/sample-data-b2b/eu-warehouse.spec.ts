import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './eu-warehouse';

describe(`with euWarehouse preset`, () => {
  it(`should return a euWarehouse preset when built for rest`, () => {
    const euWarehousePreset = presets.restPreset().build();
    expect(euWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "eu-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Europalager",
          "en": undefined,
          "en-AU": "Europe warehouse",
          "en-GB": "Europe warehouse",
          "en-NZ": "Europe warehouse",
          "en-US": "Europe warehouse",
          "es-ES": "Almacén Europa",
          "fr": undefined,
          "fr-FR": "Entrepôt Europe",
          "it-IT": "Magazzino Europa",
          "nl-NL": "Europa magazijn",
          "pt-PT": "Armazém Europa",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a euWarehouse preset when built for graphql`, () => {
    const euWarehousePreset = presets.graphqlPreset().build();
    expect(euWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "eu-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Europalager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino Europa",
          },
          {
            "locale": "nl-NL",
            "value": "Europa magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt Europe",
          },
          {
            "locale": "en-AU",
            "value": "Europe warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén Europa",
          },
          {
            "locale": "en-GB",
            "value": "Europe warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "Europe warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém Europa",
          },
          {
            "locale": "en-US",
            "value": "Europe warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a euWarehouse preset when built for legacy rest`, () => {
    const euWarehousePreset = presets
      .compatPreset()
      .buildRest<TChannelDraftRest>();
    expect(euWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "eu-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Europalager",
          "en": undefined,
          "en-AU": "Europe warehouse",
          "en-GB": "Europe warehouse",
          "en-NZ": "Europe warehouse",
          "en-US": "Europe warehouse",
          "es-ES": "Almacén Europa",
          "fr": undefined,
          "fr-FR": "Entrepôt Europe",
          "it-IT": "Magazzino Europa",
          "nl-NL": "Europa magazijn",
          "pt-PT": "Armazém Europa",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a euWarehouse preset when built for legacy graphql`, () => {
    const euWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(euWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "eu-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Europalager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino Europa",
          },
          {
            "locale": "nl-NL",
            "value": "Europa magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt Europe",
          },
          {
            "locale": "en-AU",
            "value": "Europe warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén Europa",
          },
          {
            "locale": "en-GB",
            "value": "Europe warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "Europe warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém Europa",
          },
          {
            "locale": "en-US",
            "value": "Europe warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });
});
