import type { TCategoryDraft } from '../../../types';
import towerCranes from './tower-cranes';

describe(`with towerCranes preset`, () => {
  it(`should return a towerCranes preset`, () => {
    const towerCranesPreset = towerCranes().build<TCategoryDraft>();
    expect(towerCranesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tower-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Turmdrehkräne",
          "en": undefined,
          "en-AU": "Tower Cranes",
          "en-GB": "Tower Cranes",
          "en-NZ": "Tower Cranes",
          "en-US": "Tower Cranes",
          "es-ES": "Gruas torre",
          "fr": undefined,
          "fr-FR": "Grues à tour  hauteur",
          "it-IT": "Gru a Torre",
          "nl-NL": "Torenkranen",
          "pt-PT": "Guindastes de Torre",
        },
        "orderHint": "0.00001708382948409947515103",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "turm_kraene",
          "en": undefined,
          "en-AU": "tower_cranes",
          "en-GB": "tower_cranes",
          "en-NZ": "tower_cranes",
          "en-US": "tower_cranes",
          "es-ES": "gruas_torre",
          "fr": undefined,
          "fr-FR": "grues_a_tour",
          "it-IT": "tower_cranes",
          "nl-NL": "tower_cranes",
          "pt-PT": "tower_cranes",
        },
      }
    `);
  });

  it(`should return a towerCranes preset when built for graphql`, () => {
    const towerCranesPresetGraphql =
      towerCranes().buildGraphql<TCategoryDraft>();
    expect(towerCranesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "tower-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Turmdrehkräne",
          },
          {
            "locale": "it-IT",
            "value": "Gru a Torre",
          },
          {
            "locale": "nl-NL",
            "value": "Torenkranen",
          },
          {
            "locale": "fr-FR",
            "value": "Grues à tour  hauteur",
          },
          {
            "locale": "en-AU",
            "value": "Tower Cranes",
          },
          {
            "locale": "es-ES",
            "value": "Gruas torre",
          },
          {
            "locale": "en-GB",
            "value": "Tower Cranes",
          },
          {
            "locale": "en-NZ",
            "value": "Tower Cranes",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes de Torre",
          },
          {
            "locale": "en-US",
            "value": "Tower Cranes",
          },
        ],
        "orderHint": "0.00001708382948409947515103",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "turm_kraene",
          },
          {
            "locale": "it-IT",
            "value": "tower_cranes",
          },
          {
            "locale": "nl-NL",
            "value": "tower_cranes",
          },
          {
            "locale": "fr-FR",
            "value": "grues_a_tour",
          },
          {
            "locale": "en-AU",
            "value": "tower_cranes",
          },
          {
            "locale": "es-ES",
            "value": "gruas_torre",
          },
          {
            "locale": "en-GB",
            "value": "tower_cranes",
          },
          {
            "locale": "en-NZ",
            "value": "tower_cranes",
          },
          {
            "locale": "pt-PT",
            "value": "tower_cranes",
          },
          {
            "locale": "en-US",
            "value": "tower_cranes",
          },
        ],
      }
    `);
  });
});
