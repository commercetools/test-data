import type { TCategoryDraft } from '../../../types';
import airportGraders from './airport-graders';

describe(`with airportGraders preset`, () => {
  it(`should return a airportGraders preset`, () => {
    const airportGradersPreset = airportGraders().build<TCategoryDraft>();
    expect(airportGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "airport-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Flughafengrader",
          "en": undefined,
          "en-AU": "Airport Graders",
          "en-GB": "Airport Graders",
          "en-NZ": "Airport Graders",
          "en-US": "Airport Graders",
          "es-ES": "Motoniveladoras para aeropuertos",
          "fr": undefined,
          "fr-FR": "Niveleuses d'aéroport",
          "it-IT": "Livellatrici per Aeroporti",
          "nl-NL": "Luchthavengraders",
          "pt-PT": "Motoniveladoras de Aeroporto",
        },
        "orderHint": "0.00001708382946502410689089",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "flughafen_grader",
          "en": undefined,
          "en-AU": "airport_graders",
          "en-GB": "airport_graders",
          "en-NZ": "airport_graders",
          "en-US": "airport_graders",
          "es-ES": "motoniveladoras_aeropuertos",
          "fr": undefined,
          "fr-FR": "niveleuses_aeroport",
          "it-IT": "airport_graders",
          "nl-NL": "airport_graders",
          "pt-PT": "airport_graders",
        },
      }
    `);
  });

  it(`should return a airportGraders preset when built for graphql`, () => {
    const airportGradersPresetGraphql =
      airportGraders().buildGraphql<TCategoryDraft>();
    expect(airportGradersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "airport-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Flughafengrader",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici per Aeroporti",
          },
          {
            "locale": "nl-NL",
            "value": "Luchthavengraders",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses d'aéroport",
          },
          {
            "locale": "en-AU",
            "value": "Airport Graders",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras para aeropuertos",
          },
          {
            "locale": "en-GB",
            "value": "Airport Graders",
          },
          {
            "locale": "en-NZ",
            "value": "Airport Graders",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras de Aeroporto",
          },
          {
            "locale": "en-US",
            "value": "Airport Graders",
          },
        ],
        "orderHint": "0.00001708382946502410689089",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "flughafen_grader",
          },
          {
            "locale": "it-IT",
            "value": "airport_graders",
          },
          {
            "locale": "nl-NL",
            "value": "airport_graders",
          },
          {
            "locale": "fr-FR",
            "value": "niveleuses_aeroport",
          },
          {
            "locale": "en-AU",
            "value": "airport_graders",
          },
          {
            "locale": "es-ES",
            "value": "motoniveladoras_aeropuertos",
          },
          {
            "locale": "en-GB",
            "value": "airport_graders",
          },
          {
            "locale": "en-NZ",
            "value": "airport_graders",
          },
          {
            "locale": "pt-PT",
            "value": "airport_graders",
          },
          {
            "locale": "en-US",
            "value": "airport_graders",
          },
        ],
      }
    `);
  });
});
