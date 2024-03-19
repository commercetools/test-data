import type { TCategoryDraft } from '../../../types';
import quarryingHammers from './quarrying-hammers';

describe(`with quarryingHammers preset`, () => {
  it(`should return a quarryingHammers preset`, () => {
    const quarryingHammersPreset = quarryingHammers().build<TCategoryDraft>();
    expect(quarryingHammersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "quarrying-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Steinbruchhämmer",
          "en": undefined,
          "en-AU": "Quarrying Hammers",
          "en-GB": "Quarrying Hammers",
          "en-NZ": "Quarrying Hammers",
          "en-US": "Quarrying Hammers",
          "es-ES": "Martillos de cantera",
          "fr": undefined,
          "fr-FR": "Marteaux de carrière",
          "it-IT": "Martelli per Cave",
          "nl-NL": "Steengroevehamers",
          "pt-PT": "Martelos de Pedreira",
        },
        "orderHint": "0.000017083829508032028254121",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "steinbruch_haemmer",
          "en": undefined,
          "en-AU": "quarrying_hammers",
          "en-GB": "quarrying_hammers",
          "en-NZ": "quarrying_hammers",
          "en-US": "quarrying_hammers",
          "es-ES": "martillos_cantera",
          "fr": undefined,
          "fr-FR": "marteaux_carriere",
          "it-IT": "quarrying_hammers",
          "nl-NL": "quarrying_hammers",
          "pt-PT": "quarrying_hammers",
        },
      }
    `);
  });

  it(`should return a quarryingHammers preset when built for graphql`, () => {
    const quarryingHammersPresetGraphql =
      quarryingHammers().buildGraphql<TCategoryDraft>();
    expect(quarryingHammersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "quarrying-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Steinbruchhämmer",
          },
          {
            "locale": "it-IT",
            "value": "Martelli per Cave",
          },
          {
            "locale": "nl-NL",
            "value": "Steengroevehamers",
          },
          {
            "locale": "fr-FR",
            "value": "Marteaux de carrière",
          },
          {
            "locale": "en-AU",
            "value": "Quarrying Hammers",
          },
          {
            "locale": "es-ES",
            "value": "Martillos de cantera",
          },
          {
            "locale": "en-GB",
            "value": "Quarrying Hammers",
          },
          {
            "locale": "en-NZ",
            "value": "Quarrying Hammers",
          },
          {
            "locale": "pt-PT",
            "value": "Martelos de Pedreira",
          },
          {
            "locale": "en-US",
            "value": "Quarrying Hammers",
          },
        ],
        "orderHint": "0.000017083829508032028254121",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "steinbruch_haemmer",
          },
          {
            "locale": "it-IT",
            "value": "quarrying_hammers",
          },
          {
            "locale": "nl-NL",
            "value": "quarrying_hammers",
          },
          {
            "locale": "fr-FR",
            "value": "marteaux_carriere",
          },
          {
            "locale": "en-AU",
            "value": "quarrying_hammers",
          },
          {
            "locale": "es-ES",
            "value": "martillos_cantera",
          },
          {
            "locale": "en-GB",
            "value": "quarrying_hammers",
          },
          {
            "locale": "en-NZ",
            "value": "quarrying_hammers",
          },
          {
            "locale": "pt-PT",
            "value": "quarrying_hammers",
          },
          {
            "locale": "en-US",
            "value": "quarrying_hammers",
          },
        ],
      }
    `);
  });
});
