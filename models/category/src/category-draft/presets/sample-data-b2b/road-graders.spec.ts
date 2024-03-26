import type { TCategoryDraft } from '../../../types';
import roadGraders from './road-graders';

describe(`with roadGraders preset`, () => {
  it(`should return a roadGraders preset`, () => {
    const roadGradersPreset = roadGraders().build<TCategoryDraft>();
    expect(roadGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Motorgrader für den Straßenbau",
          "en-AU": "Motor graders for road construction",
          "en-GB": "Motor graders for road construction",
          "en-NZ": "Motor graders for road construction",
          "en-US": "Motor graders for road construction",
          "es-ES": "Motoniveladoras para construcción de carreteras",
          "fr-FR": "Niveleuses pour la construction routière",
          "it-IT": "Livellatrici motorizzate per la costruzione stradale",
          "nl-NL": "Motorgraders voor wegconstructie",
          "pt-PT": "Motoniveladoras para construção de estradas",
        },
        "externalId": undefined,
        "key": "road-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Straßengrader",
          "en-AU": "Road Graders",
          "en-GB": "Road Graders",
          "en-NZ": "Road Graders",
          "en-US": "Road Graders",
          "es-ES": "Motoniveladoras para carreteras",
          "fr-FR": "Niveleuses routières",
          "it-IT": "Livellatrici Stradali",
          "nl-NL": "Weggraders",
          "pt-PT": "Motoniveladoras de Estrada",
        },
        "orderHint": "0.000017113644847361524464697",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "strassen_grader",
          "en-AU": "road_graders",
          "en-GB": "road_graders",
          "en-NZ": "road_graders",
          "en-US": "road_graders",
          "es-ES": "motoniveladoras_carreteras",
          "fr-FR": "niveleuses_construction_routiere",
          "it-IT": "road_graders",
          "nl-NL": "road_graders",
          "pt-PT": "road_graders",
        },
      }
    `);
  });

  it(`should return a roadGraders preset when built for graphql`, () => {
    const roadGradersPresetGraphql =
      roadGraders().buildGraphql<TCategoryDraft>();
    expect(roadGradersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Motorgrader für den Straßenbau",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici motorizzate per la costruzione stradale",
          },
          {
            "locale": "nl-NL",
            "value": "Motorgraders voor wegconstructie",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses pour la construction routière",
          },
          {
            "locale": "en-AU",
            "value": "Motor graders for road construction",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras para construcción de carreteras",
          },
          {
            "locale": "en-GB",
            "value": "Motor graders for road construction",
          },
          {
            "locale": "en-NZ",
            "value": "Motor graders for road construction",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras para construção de estradas",
          },
          {
            "locale": "en-US",
            "value": "Motor graders for road construction",
          },
        ],
        "externalId": undefined,
        "key": "road-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Straßengrader",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici Stradali",
          },
          {
            "locale": "nl-NL",
            "value": "Weggraders",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses routières",
          },
          {
            "locale": "en-AU",
            "value": "Road Graders",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras para carreteras",
          },
          {
            "locale": "en-GB",
            "value": "Road Graders",
          },
          {
            "locale": "en-NZ",
            "value": "Road Graders",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras de Estrada",
          },
          {
            "locale": "en-US",
            "value": "Road Graders",
          },
        ],
        "orderHint": "0.000017113644847361524464697",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "strassen_grader",
          },
          {
            "locale": "it-IT",
            "value": "road_graders",
          },
          {
            "locale": "nl-NL",
            "value": "road_graders",
          },
          {
            "locale": "fr-FR",
            "value": "niveleuses_construction_routiere",
          },
          {
            "locale": "en-AU",
            "value": "road_graders",
          },
          {
            "locale": "es-ES",
            "value": "motoniveladoras_carreteras",
          },
          {
            "locale": "en-GB",
            "value": "road_graders",
          },
          {
            "locale": "en-NZ",
            "value": "road_graders",
          },
          {
            "locale": "pt-PT",
            "value": "road_graders",
          },
          {
            "locale": "en-US",
            "value": "road_graders",
          },
        ],
      }
    `);
  });
});
