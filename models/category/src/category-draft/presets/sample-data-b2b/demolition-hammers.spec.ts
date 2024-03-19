import type { TCategoryDraft } from '../../../types';
import demolitionHammers from './demolition-hammers';

describe(`with demolitionHammers preset`, () => {
  it(`should return a demolitionHammers preset`, () => {
    const demolitionHammersPreset = demolitionHammers().build<TCategoryDraft>();
    expect(demolitionHammersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "demolition-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Abbruchhämmer",
          "en": undefined,
          "en-AU": "Demolition Hammers",
          "en-GB": "Demolition Hammers",
          "en-NZ": "Demolition Hammers",
          "en-US": "Demolition Hammers",
          "es-ES": "Martillos de demolición",
          "fr": undefined,
          "fr-FR": "Marteaux de démolition",
          "it-IT": "Martelli Demolitori",
          "nl-NL": "Sloophamers",
          "pt-PT": "Martelos Demolidores",
        },
        "orderHint": "0.00001708382950462763451332",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "abbruch_haemmer",
          "en": undefined,
          "en-AU": "demolition_hammers",
          "en-GB": "demolition_hammers",
          "en-NZ": "demolition_hammers",
          "en-US": "demolition_hammers",
          "es-ES": "martillos_demolicion",
          "fr": undefined,
          "fr-FR": "marteaux_demolition",
          "it-IT": "demolition_hammers",
          "nl-NL": "demolition_hammers",
          "pt-PT": "demolition_hammers",
        },
      }
    `);
  });

  it(`should return a demolitionHammers preset when built for graphql`, () => {
    const demolitionHammersPresetGraphql =
      demolitionHammers().buildGraphql<TCategoryDraft>();
    expect(demolitionHammersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "demolition-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Abbruchhämmer",
          },
          {
            "locale": "it-IT",
            "value": "Martelli Demolitori",
          },
          {
            "locale": "nl-NL",
            "value": "Sloophamers",
          },
          {
            "locale": "fr-FR",
            "value": "Marteaux de démolition",
          },
          {
            "locale": "en-AU",
            "value": "Demolition Hammers",
          },
          {
            "locale": "es-ES",
            "value": "Martillos de demolición",
          },
          {
            "locale": "en-GB",
            "value": "Demolition Hammers",
          },
          {
            "locale": "en-NZ",
            "value": "Demolition Hammers",
          },
          {
            "locale": "pt-PT",
            "value": "Martelos Demolidores",
          },
          {
            "locale": "en-US",
            "value": "Demolition Hammers",
          },
        ],
        "orderHint": "0.00001708382950462763451332",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "abbruch_haemmer",
          },
          {
            "locale": "it-IT",
            "value": "demolition_hammers",
          },
          {
            "locale": "nl-NL",
            "value": "demolition_hammers",
          },
          {
            "locale": "fr-FR",
            "value": "marteaux_demolition",
          },
          {
            "locale": "en-AU",
            "value": "demolition_hammers",
          },
          {
            "locale": "es-ES",
            "value": "martillos_demolicion",
          },
          {
            "locale": "en-GB",
            "value": "demolition_hammers",
          },
          {
            "locale": "en-NZ",
            "value": "demolition_hammers",
          },
          {
            "locale": "pt-PT",
            "value": "demolition_hammers",
          },
          {
            "locale": "en-US",
            "value": "demolition_hammers",
          },
        ],
      }
    `);
  });
});
