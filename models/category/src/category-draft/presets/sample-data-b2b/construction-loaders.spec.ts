import type { TCategoryDraft } from '../../../types';
import constructionLoaders from './construction-loaders';

describe(`with constructionLoaders preset`, () => {
  it(`should return a constructionLoaders preset`, () => {
    const constructionLoadersPreset =
      constructionLoaders().build<TCategoryDraft>();
    expect(constructionLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Lader, die für Bauaufgaben konzipiert sind",
          "en": undefined,
          "en-AU": "Loaders designed for construction tasks",
          "en-GB": "Loaders designed for construction tasks",
          "en-NZ": "Loaders designed for construction tasks",
          "en-US": "Loaders designed for construction tasks",
          "es-ES": "Cargadores diseñados para tareas de construcción",
          "fr": undefined,
          "fr-FR": "Chargeuses conçues pour les tâches de construction",
          "it-IT": "Caricatori progettati per compiti di costruzione",
          "nl-NL": "Laders ontworpen voor bouwtaken",
          "pt-PT": "Carregadeiras projetadas para tarefas de construção",
        },
        "externalId": undefined,
        "key": "construction-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Baustellenlader",
          "en": undefined,
          "en-AU": "Construction Loaders",
          "en-GB": "Construction Loaders",
          "en-NZ": "Construction Loaders",
          "en-US": "Construction Loaders",
          "es-ES": "Cargadores de construcción",
          "fr": undefined,
          "fr-FR": "Chargeuses de construction",
          "it-IT": "Caricatori da Costruzione",
          "nl-NL": "Bouwladers",
          "pt-PT": "Carregadeiras de Construção",
        },
        "orderHint": "0.0000171136448475727245821",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bau_lader",
          "en": undefined,
          "en-AU": "construction_loaders",
          "en-GB": "construction_loaders",
          "en-NZ": "construction_loaders",
          "en-US": "construction_loaders",
          "es-ES": "cargadores_construccion",
          "fr": undefined,
          "fr-FR": "chargeuses_construction",
          "it-IT": "construction_loaders",
          "nl-NL": "construction_loaders",
          "pt-PT": "construction_loaders",
        },
      }
    `);
  });

  it(`should return a constructionLoaders preset when built for graphql`, () => {
    const constructionLoadersPresetGraphql =
      constructionLoaders().buildGraphql<TCategoryDraft>();
    expect(constructionLoadersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Lader, die für Bauaufgaben konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori progettati per compiti di costruzione",
          },
          {
            "locale": "nl-NL",
            "value": "Laders ontworpen voor bouwtaken",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses conçues pour les tâches de construction",
          },
          {
            "locale": "en-AU",
            "value": "Loaders designed for construction tasks",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores diseñados para tareas de construcción",
          },
          {
            "locale": "en-GB",
            "value": "Loaders designed for construction tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Loaders designed for construction tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras projetadas para tarefas de construção",
          },
          {
            "locale": "en-US",
            "value": "Loaders designed for construction tasks",
          },
        ],
        "externalId": undefined,
        "key": "construction-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Baustellenlader",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori da Costruzione",
          },
          {
            "locale": "nl-NL",
            "value": "Bouwladers",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses de construction",
          },
          {
            "locale": "en-AU",
            "value": "Construction Loaders",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores de construcción",
          },
          {
            "locale": "en-GB",
            "value": "Construction Loaders",
          },
          {
            "locale": "en-NZ",
            "value": "Construction Loaders",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras de Construção",
          },
          {
            "locale": "en-US",
            "value": "Construction Loaders",
          },
        ],
        "orderHint": "0.0000171136448475727245821",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "bau_lader",
          },
          {
            "locale": "it-IT",
            "value": "construction_loaders",
          },
          {
            "locale": "nl-NL",
            "value": "construction_loaders",
          },
          {
            "locale": "fr-FR",
            "value": "chargeuses_construction",
          },
          {
            "locale": "en-AU",
            "value": "construction_loaders",
          },
          {
            "locale": "es-ES",
            "value": "cargadores_construccion",
          },
          {
            "locale": "en-GB",
            "value": "construction_loaders",
          },
          {
            "locale": "en-NZ",
            "value": "construction_loaders",
          },
          {
            "locale": "pt-PT",
            "value": "construction_loaders",
          },
          {
            "locale": "en-US",
            "value": "construction_loaders",
          },
        ],
      }
    `);
  });
});
