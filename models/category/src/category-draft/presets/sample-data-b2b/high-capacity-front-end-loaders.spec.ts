import type { TCategoryDraft } from '../../../types';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

describe(`with highCapacityFrontEndLoaders preset`, () => {
  it(`should return a highCapacityFrontEndLoaders preset`, () => {
    const highCapacityFrontEndLoadersPreset =
      highCapacityFrontEndLoaders().build<TCategoryDraft>();
    expect(highCapacityFrontEndLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "high-capacity-front-end-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Frontlader",
          "en": undefined,
          "en-AU": "Loaders",
          "en-GB": "Loaders",
          "en-NZ": "Loaders",
          "en-US": "Loaders",
          "es-ES": "Cargadores",
          "fr": undefined,
          "fr-FR": "Chargeuses",
          "it-IT": "Caricatori",
          "nl-NL": "Laders",
          "pt-PT": "Carregadeiras",
        },
        "orderHint": "0.000017083829370961875597117",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "hohe_kapazitaet_frontlader",
          "en": undefined,
          "en-AU": "high_capacity_front_end_loaders",
          "en-GB": "high_capacity_front_end_loaders",
          "en-NZ": "high_capacity_front_end_loaders",
          "en-US": "high_capacity_front_end_loaders",
          "es-ES": "cargadores_frontales_alta_capacidad",
          "fr": undefined,
          "fr-FR": "chargeuses_haute_capacite_frontale",
          "it-IT": "high_capacity_front_end_loaders",
          "nl-NL": "high_capacity_front_end_loaders",
          "pt-PT": "high_capacity_front_end_loaders",
        },
      }
    `);
  });

  it(`should return a highCapacityFrontEndLoaders preset when built for graphql`, () => {
    const highCapacityFrontEndLoadersPresetGraphql =
      highCapacityFrontEndLoaders().buildGraphql<TCategoryDraft>();
    expect(highCapacityFrontEndLoadersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "high-capacity-front-end-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Frontlader",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori",
          },
          {
            "locale": "nl-NL",
            "value": "Laders",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses",
          },
          {
            "locale": "en-AU",
            "value": "Loaders",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores",
          },
          {
            "locale": "en-GB",
            "value": "Loaders",
          },
          {
            "locale": "en-NZ",
            "value": "Loaders",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras",
          },
          {
            "locale": "en-US",
            "value": "Loaders",
          },
        ],
        "orderHint": "0.000017083829370961875597117",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "hohe_kapazitaet_frontlader",
          },
          {
            "locale": "it-IT",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "nl-NL",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "fr-FR",
            "value": "chargeuses_haute_capacite_frontale",
          },
          {
            "locale": "en-AU",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "es-ES",
            "value": "cargadores_frontales_alta_capacidad",
          },
          {
            "locale": "en-GB",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "en-NZ",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "pt-PT",
            "value": "high_capacity_front_end_loaders",
          },
          {
            "locale": "en-US",
            "value": "high_capacity_front_end_loaders",
          },
        ],
      }
    `);
  });
});
