import type { TCategoryDraft } from '../../../types';
import towerCranes from './tower-cranes';

describe(`with towerCranes preset`, () => {
  it(`should return a towerCranes preset`, () => {
    const towerCranesPreset = towerCranes().build<TCategoryDraft>();
    expect(towerCranesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Kräne, die für den Hochhausbau geeignet sind",
          "en-AU": "Cranes suitable for high-rise construction",
          "en-GB": "Cranes suitable for high-rise construction",
          "en-NZ": "Cranes suitable for high-rise construction",
          "en-US": "Cranes suitable for high-rise construction",
          "es-ES": "Gruas adecuadas para la construcción de rascacielos",
          "fr-FR": "Grues adaptées à la construction en hauteur",
          "it-IT": "Gru adatte per la costruzione di edifici alti",
          "nl-NL": "Kranen geschikt voor hoogbouw",
          "pt-PT": "Guindastes adequados para construção de edifícios altos",
        },
        "externalId": undefined,
        "key": "tower-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Turmdrehkräne",
          "en-AU": "Tower Cranes",
          "en-GB": "Tower Cranes",
          "en-NZ": "Tower Cranes",
          "en-US": "Tower Cranes",
          "es-ES": "Gruas torre",
          "fr-FR": "Grues à tour  hauteur",
          "it-IT": "Gru a Torre",
          "nl-NL": "Torenkranen",
          "pt-PT": "Guindastes de Torre",
        },
        "orderHint": "0.000017113644847601298494328",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "turm_kraene",
          "en-AU": "tower_cranes",
          "en-GB": "tower_cranes",
          "en-NZ": "tower_cranes",
          "en-US": "tower_cranes",
          "es-ES": "gruas_torre",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Kräne, die für den Hochhausbau geeignet sind",
          },
          {
            "locale": "it-IT",
            "value": "Gru adatte per la costruzione di edifici alti",
          },
          {
            "locale": "nl-NL",
            "value": "Kranen geschikt voor hoogbouw",
          },
          {
            "locale": "fr-FR",
            "value": "Grues adaptées à la construction en hauteur",
          },
          {
            "locale": "en-AU",
            "value": "Cranes suitable for high-rise construction",
          },
          {
            "locale": "es-ES",
            "value": "Gruas adecuadas para la construcción de rascacielos",
          },
          {
            "locale": "en-GB",
            "value": "Cranes suitable for high-rise construction",
          },
          {
            "locale": "en-NZ",
            "value": "Cranes suitable for high-rise construction",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes adequados para construção de edifícios altos",
          },
          {
            "locale": "en-US",
            "value": "Cranes suitable for high-rise construction",
          },
        ],
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
        "orderHint": "0.000017113644847601298494328",
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
