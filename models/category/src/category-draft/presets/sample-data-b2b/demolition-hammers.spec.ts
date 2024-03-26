import type { TCategoryDraft } from '../../../types';
import demolitionHammers from './demolition-hammers';

describe(`with demolitionHammers preset`, () => {
  it(`should return a demolitionHammers preset`, () => {
    const demolitionHammersPreset = demolitionHammers().build<TCategoryDraft>();
    expect(demolitionHammersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Hämmer, die für Abbrucharbeiten verwendet werden",
          "en-AU": "Hammers used for demolition tasks",
          "en-GB": "Hammers used for demolition tasks",
          "en-NZ": "Hammers used for demolition tasks",
          "en-US": "Hammers used for demolition tasks",
          "es-ES": "Martillos utilizados para tareas de demolición",
          "fr-FR": "Marteaux utilisés pour des tâches de démolition",
          "it-IT": "Martelli utilizzati per compiti di demolizione",
          "nl-NL": "Hamers gebruikt voor sloopwerkzaamheden",
          "pt-PT": "Martelos usados para tarefas de demolição",
        },
        "externalId": undefined,
        "key": "demolition-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Abbruchhämmer",
          "en-AU": "Demolition Hammers",
          "en-GB": "Demolition Hammers",
          "en-NZ": "Demolition Hammers",
          "en-US": "Demolition Hammers",
          "es-ES": "Martillos de demolición",
          "fr-FR": "Marteaux de démolition",
          "it-IT": "Martelli Demolitori",
          "nl-NL": "Sloophamers",
          "pt-PT": "Martelos Demolidores",
        },
        "orderHint": "0.00001711364484762327979076",
        "parent": {
          "key": "large-hydraulic-hammers",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "abbruch_haemmer",
          "en-AU": "demolition_hammers",
          "en-GB": "demolition_hammers",
          "en-NZ": "demolition_hammers",
          "en-US": "demolition_hammers",
          "es-ES": "martillos_demolicion",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Hämmer, die für Abbrucharbeiten verwendet werden",
          },
          {
            "locale": "it-IT",
            "value": "Martelli utilizzati per compiti di demolizione",
          },
          {
            "locale": "nl-NL",
            "value": "Hamers gebruikt voor sloopwerkzaamheden",
          },
          {
            "locale": "fr-FR",
            "value": "Marteaux utilisés pour des tâches de démolition",
          },
          {
            "locale": "en-AU",
            "value": "Hammers used for demolition tasks",
          },
          {
            "locale": "es-ES",
            "value": "Martillos utilizados para tareas de demolición",
          },
          {
            "locale": "en-GB",
            "value": "Hammers used for demolition tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Hammers used for demolition tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Martelos usados para tarefas de demolição",
          },
          {
            "locale": "en-US",
            "value": "Hammers used for demolition tasks",
          },
        ],
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
        "orderHint": "0.00001711364484762327979076",
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
