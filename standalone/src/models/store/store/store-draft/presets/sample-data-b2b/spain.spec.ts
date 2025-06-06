import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { spain, spainGraphql, spainRest } from './spain';

describe(`with spain preset`, () => {
  it(`should return a spain preset for rest`, () => {
    const spainPresetRest = spainRest().buildRest<TStoreDraftRest>();
    expect(spainPresetRest).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "spain",
            "typeId": "channel",
          },
        ],
        "key": "spain",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Spanien",
          "en": undefined,
          "en-AU": "Spain",
          "en-GB": "Spain",
          "en-NZ": "Spain",
          "en-US": "Spain",
          "es-ES": "España",
          "fr": undefined,
          "fr-FR": "Espagnole",
          "it-IT": "Spagna",
          "nl-NL": "Spanje",
          "pt-PT": "Espanha",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "eu-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a spain preset for graphql`, () => {
    const spainPresetGraphql =
      spainGraphql().buildGraphql<TStoreDraftGraphql>();
    expect(spainPresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "spain",
            "typeId": "channel",
          },
        ],
        "key": "spain",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Spanien",
          },
          {
            "locale": "it-IT",
            "value": "Spagna",
          },
          {
            "locale": "nl-NL",
            "value": "Spanje",
          },
          {
            "locale": "fr-FR",
            "value": "Espagnole",
          },
          {
            "locale": "en-AU",
            "value": "Spain",
          },
          {
            "locale": "es-ES",
            "value": "España",
          },
          {
            "locale": "en-GB",
            "value": "Spain",
          },
          {
            "locale": "en-NZ",
            "value": "Spain",
          },
          {
            "locale": "pt-PT",
            "value": "Espanha",
          },
          {
            "locale": "en-US",
            "value": "Spain",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "eu-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });
  it(`should return a spain preset`, () => {
    const spainPreset = spain().build<TStoreDraftRest>();
    expect(spainPreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "spain",
            "typeId": "channel",
          },
        ],
        "key": "spain",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Spanien",
          "en": undefined,
          "en-AU": "Spain",
          "en-GB": "Spain",
          "en-NZ": "Spain",
          "en-US": "Spain",
          "es-ES": "España",
          "fr": undefined,
          "fr-FR": "Espagnole",
          "it-IT": "Spagna",
          "nl-NL": "Spanje",
          "pt-PT": "Espanha",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "eu-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it(`should return a spain preset when built for graphql`, () => {
    const spainPresetGraphql = spain().buildGraphql<TStoreDraftGraphql>();
    expect(spainPresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "spain",
            "typeId": "channel",
          },
        ],
        "key": "spain",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Spanien",
          },
          {
            "locale": "it-IT",
            "value": "Spagna",
          },
          {
            "locale": "nl-NL",
            "value": "Spanje",
          },
          {
            "locale": "fr-FR",
            "value": "Espagnole",
          },
          {
            "locale": "en-AU",
            "value": "Spain",
          },
          {
            "locale": "es-ES",
            "value": "España",
          },
          {
            "locale": "en-GB",
            "value": "Spain",
          },
          {
            "locale": "en-NZ",
            "value": "Spain",
          },
          {
            "locale": "pt-PT",
            "value": "Espanha",
          },
          {
            "locale": "en-US",
            "value": "Spain",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "eu-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });
});
