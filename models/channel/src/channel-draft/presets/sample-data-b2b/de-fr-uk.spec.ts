import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './de-fr-uk';

describe(`with deFrUk preset`, () => {
  it(`should return a deFrUk preset when built for rest`, () => {
    const deFrUkPreset = presets.restPreset().build();
    expect(deFrUkPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "de-fr-uk",
        "name": {
          "de": undefined,
          "de-DE": "Deutschland, Frankreich und Vereinigtes Königreich",
          "en": undefined,
          "en-AU": "Germany, France and United Kingdom",
          "en-GB": "Germany, France and United Kingdom",
          "en-NZ": "Germany, France and United Kingdom",
          "en-US": "Germany, France and United Kingdom",
          "es-ES": "Alemania, Francia y Reino Unido",
          "fr": undefined,
          "fr-FR": "Allemagne, France et Royaume-Uni",
          "it-IT": "Germania, Francia e Regno Unito",
          "nl-NL": "Duitsland, Frankrijk en Verenigd Koninkrijk",
          "pt-PT": "Alemanha, França e Reino Unido",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a deFrUk preset when built for graphql`, () => {
    const deFrUkPreset = presets.graphqlPreset().build();
    expect(deFrUkPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "de-fr-uk",
        "name": [
          {
            "locale": "de-DE",
            "value": "Deutschland, Frankreich und Vereinigtes Königreich",
          },
          {
            "locale": "it-IT",
            "value": "Germania, Francia e Regno Unito",
          },
          {
            "locale": "nl-NL",
            "value": "Duitsland, Frankrijk en Verenigd Koninkrijk",
          },
          {
            "locale": "fr-FR",
            "value": "Allemagne, France et Royaume-Uni",
          },
          {
            "locale": "en-AU",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "es-ES",
            "value": "Alemania, Francia y Reino Unido",
          },
          {
            "locale": "en-GB",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "en-NZ",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "pt-PT",
            "value": "Alemanha, França e Reino Unido",
          },
          {
            "locale": "en-US",
            "value": "Germany, France and United Kingdom",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a deFrUk preset when built for legacy rest`, () => {
    const deFrUkPreset = presets.compatPreset().buildRest<TChannelDraftRest>();
    expect(deFrUkPreset).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "de-fr-uk",
        "name": {
          "de": undefined,
          "de-DE": "Deutschland, Frankreich und Vereinigtes Königreich",
          "en": undefined,
          "en-AU": "Germany, France and United Kingdom",
          "en-GB": "Germany, France and United Kingdom",
          "en-NZ": "Germany, France and United Kingdom",
          "en-US": "Germany, France and United Kingdom",
          "es-ES": "Alemania, Francia y Reino Unido",
          "fr": undefined,
          "fr-FR": "Allemagne, France et Royaume-Uni",
          "it-IT": "Germania, Francia e Regno Unito",
          "nl-NL": "Duitsland, Frankrijk en Verenigd Koninkrijk",
          "pt-PT": "Alemanha, França e Reino Unido",
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it(`should return a deFrUk preset when built for legacy graphql`, () => {
    const deFrUkPreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(deFrUkPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": undefined,
        "geoLocation": undefined,
        "key": "de-fr-uk",
        "name": [
          {
            "locale": "de-DE",
            "value": "Deutschland, Frankreich und Vereinigtes Königreich",
          },
          {
            "locale": "it-IT",
            "value": "Germania, Francia e Regno Unito",
          },
          {
            "locale": "nl-NL",
            "value": "Duitsland, Frankrijk en Verenigd Koninkrijk",
          },
          {
            "locale": "fr-FR",
            "value": "Allemagne, France et Royaume-Uni",
          },
          {
            "locale": "en-AU",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "es-ES",
            "value": "Alemania, Francia y Reino Unido",
          },
          {
            "locale": "en-GB",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "en-NZ",
            "value": "Germany, France and United Kingdom",
          },
          {
            "locale": "pt-PT",
            "value": "Alemanha, França e Reino Unido",
          },
          {
            "locale": "en-US",
            "value": "Germany, France and United Kingdom",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
