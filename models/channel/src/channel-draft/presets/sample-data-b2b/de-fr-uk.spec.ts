import type { TChannelDraft } from '../../../types';
import deFrUk from './de-fr-uk';

describe(`with deFrUk preset`, () => {
  it(`should return a deFrUk preset`, () => {
    const deFrUkPreset = deFrUk().build<TChannelDraft>();
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
          "en-UK": "Germany, France and United Kingdom",
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
    const deFrUkPresetGraphql = deFrUk().buildGraphql<TChannelDraft>();
    expect(deFrUkPresetGraphql).toMatchInlineSnapshot(`
      {
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
            "locale": "en-UK",
            "value": "Germany, France and United Kingdom",
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
