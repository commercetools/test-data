import type { TCategoryDraft } from '../../../types';
import airportGraders from './airport-graders';

describe(`with airportGraders preset`, () => {
  it(`should return a airportGraders preset`, () => {
    const airportGradersPreset = airportGraders().build<TCategoryDraft>();
    expect(airportGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Motorgrader, die für den Flughafenbau geeignet sind",
          "en": undefined,
          "en-AU": "Motor graders suitable for airport construction",
          "en-GB": "Motor graders suitable for airport construction",
          "en-NZ": "Motor graders suitable for airport construction",
          "en-US": "Motor graders suitable for airport construction",
          "es-ES": "Motoniveladoras adecuadas para la construcción de aeropuertos",
          "fr": undefined,
          "fr-FR": "Niveleuses adaptées à la construction aéroportuaire",
          "it-IT": "Livellatrici motorizzate adatte per la costruzione di aeroporti",
          "nl-NL": "Motorgraders geschikt voor luchthavenbouw",
          "pt-PT": "Motoniveladoras adequadas para construção de aeroportos",
        },
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
        "orderHint": "0.000017113644847401957960348",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Motorgrader, die für den Flughafenbau geeignet sind",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici motorizzate adatte per la costruzione di aeroporti",
          },
          {
            "locale": "nl-NL",
            "value": "Motorgraders geschikt voor luchthavenbouw",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses adaptées à la construction aéroportuaire",
          },
          {
            "locale": "en-AU",
            "value": "Motor graders suitable for airport construction",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras adecuadas para la construcción de aeropuertos",
          },
          {
            "locale": "en-GB",
            "value": "Motor graders suitable for airport construction",
          },
          {
            "locale": "en-NZ",
            "value": "Motor graders suitable for airport construction",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras adequadas para construção de aeroportos",
          },
          {
            "locale": "en-US",
            "value": "Motor graders suitable for airport construction",
          },
        ],
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
        "orderHint": "0.000017113644847401957960348",
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
