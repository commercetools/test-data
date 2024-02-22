import type { TCategoryDraft } from '../../../types';
import highCapacityMotorGraders from './high-capacity-motor-graders';

describe(`with highCapacityMotorGraders preset`, () => {
  it(`should return a highCapacityMotorGraders preset`, () => {
    const highCapacityMotorGradersPreset =
      highCapacityMotorGraders().build<TCategoryDraft>();
    expect(highCapacityMotorGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "high-capacity-motor-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Motorgrader",
          "en": undefined,
          "en-AU": "Graders",
          "en-GB": "Graders",
          "en-NZ": "Graders",
          "en-US": "Graders",
          "es-ES": "Motoniveladoras",
          "fr": undefined,
          "fr-FR": "Niveleuses",
          "it-IT": "Livellatrici",
          "nl-NL": "Graders",
          "pt-PT": "Motoniveladoras",
        },
        "orderHint": "0.0000170838293796780439361",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "hohe_kapazitaet_motorgrader",
          "en": undefined,
          "en-AU": "high_capacity_motor_graders",
          "en-GB": "high_capacity_motor_graders",
          "en-NZ": "high_capacity_motor_graders",
          "en-US": "high_capacity_motor_graders",
          "es-ES": "motoniveladoras_alta_capacidad",
          "fr": undefined,
          "fr-FR": "niveleuses_haute_capacite",
          "it-IT": "high_capacity_motor_graders",
          "nl-NL": "high_capacity_motor_graders",
          "pt-PT": "high_capacity_motor_graders",
        },
      }
    `);
  });

  it(`should return a highCapacityMotorGraders preset when built for graphql`, () => {
    const highCapacityMotorGradersPresetGraphql =
      highCapacityMotorGraders().buildGraphql<TCategoryDraft>();
    expect(highCapacityMotorGradersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "high-capacity-motor-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Motorgrader",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici",
          },
          {
            "locale": "nl-NL",
            "value": "Graders",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses",
          },
          {
            "locale": "en-AU",
            "value": "Graders",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras",
          },
          {
            "locale": "en-GB",
            "value": "Graders",
          },
          {
            "locale": "en-NZ",
            "value": "Graders",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras",
          },
          {
            "locale": "en-US",
            "value": "Graders",
          },
        ],
        "orderHint": "0.0000170838293796780439361",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "hohe_kapazitaet_motorgrader",
          },
          {
            "locale": "it-IT",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "nl-NL",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "fr-FR",
            "value": "niveleuses_haute_capacite",
          },
          {
            "locale": "en-AU",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "es-ES",
            "value": "motoniveladoras_alta_capacidad",
          },
          {
            "locale": "en-GB",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "en-NZ",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "pt-PT",
            "value": "high_capacity_motor_graders",
          },
          {
            "locale": "en-US",
            "value": "high_capacity_motor_graders",
          },
        ],
      }
    `);
  });
});
