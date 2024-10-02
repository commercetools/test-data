import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import {
  ChannelDraft,
  ChannelDraftGraphql,
  ChannelDraftRest,
} from '../../index';

describe(`with usWarehouse preset`, () => {
  it(`should return a usWarehouse preset when built for rest`, () => {
    const usWarehousePreset = ChannelDraftRest.presets.usWarehouse().build();
    expect(usWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Nordamerika-Lager",
          "en": undefined,
          "en-AU": "North America warehouse",
          "en-GB": "North America warehouse",
          "en-NZ": "North America warehouse",
          "en-US": "North America warehouse",
          "es-ES": "Almacén Norteamérica",
          "fr": undefined,
          "fr-FR": "Entrepôt Amérique du Nord",
          "it-IT": "Magazzino Nord America",
          "nl-NL": "Noord-Amerika magazijn",
          "pt-PT": "Armazém América do Norte",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a usWarehouse preset when built for graphql`, () => {
    const usWarehousePreset = ChannelDraftGraphql.presets.usWarehouse().build();
    expect(usWarehousePreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Nordamerika-Lager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino Nord America",
          },
          {
            "locale": "nl-NL",
            "value": "Noord-Amerika magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt Amérique du Nord",
          },
          {
            "locale": "en-AU",
            "value": "North America warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén Norteamérica",
          },
          {
            "locale": "en-GB",
            "value": "North America warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "North America warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém América do Norte",
          },
          {
            "locale": "en-US",
            "value": "North America warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a usWarehouse preset when built for legacy rest`, () => {
    const usWarehousePreset = ChannelDraft.presets
      .usWarehouse()
      .buildRest<TChannelDraftRest>();
    expect(usWarehousePreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-warehouse",
        "name": {
          "de": undefined,
          "de-DE": "Nordamerika-Lager",
          "en": undefined,
          "en-AU": "North America warehouse",
          "en-GB": "North America warehouse",
          "en-NZ": "North America warehouse",
          "en-US": "North America warehouse",
          "es-ES": "Almacén Norteamérica",
          "fr": undefined,
          "fr-FR": "Entrepôt Amérique du Nord",
          "it-IT": "Magazzino Nord America",
          "nl-NL": "Noord-Amerika magazijn",
          "pt-PT": "Armazém América do Norte",
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it(`should return a usWarehouse preset when built for legacy graphql`, () => {
    const usWarehousePreset = ChannelDraft.presets
      .usWarehouse()
      .buildGraphql<TChannelDraftGraphql>();
    expect(usWarehousePreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "us-warehouse",
        "name": [
          {
            "locale": "de-DE",
            "value": "Nordamerika-Lager",
          },
          {
            "locale": "it-IT",
            "value": "Magazzino Nord America",
          },
          {
            "locale": "nl-NL",
            "value": "Noord-Amerika magazijn",
          },
          {
            "locale": "fr-FR",
            "value": "Entrepôt Amérique du Nord",
          },
          {
            "locale": "en-AU",
            "value": "North America warehouse",
          },
          {
            "locale": "es-ES",
            "value": "Almacén Norteamérica",
          },
          {
            "locale": "en-GB",
            "value": "North America warehouse",
          },
          {
            "locale": "en-NZ",
            "value": "North America warehouse",
          },
          {
            "locale": "pt-PT",
            "value": "Armazém América do Norte",
          },
          {
            "locale": "en-US",
            "value": "North America warehouse",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });
});
