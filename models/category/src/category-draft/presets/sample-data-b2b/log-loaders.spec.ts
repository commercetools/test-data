import type { TCategoryDraft } from '../../../types';
import logLoaders from './log-loaders';

describe(`with logLoaders preset`, () => {
  it(`should return a logLoaders preset`, () => {
    const logLoadersPreset = logLoaders().build<TCategoryDraft>();
    expect(logLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "log-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Holzstapel-Lader",
          "en": undefined,
          "en-AU": "Log Loaders",
          "en-GB": "Log Loaders",
          "en-NZ": "Log Loaders",
          "en-US": "Log Loaders",
          "es-ES": "Cargadores de troncos",
          "fr": undefined,
          "fr-FR": "Chargeuses de grumes",
          "it-IT": "Caricatori di Tronchi",
          "nl-NL": "Houtladers",
          "pt-PT": "Carregadeiras de Toras",
        },
        "orderHint": "0.000017083829434891467155616",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "holz_lader",
          "en": undefined,
          "en-AU": "log_loaders",
          "en-GB": "log_loaders",
          "en-NZ": "log_loaders",
          "en-US": "log_loaders",
          "es-ES": "cargadores_troncos",
          "fr": undefined,
          "fr-FR": "chargeuses_grumes",
          "it-IT": "log_loaders",
          "nl-NL": "log_loaders",
          "pt-PT": "log_loaders",
        },
      }
    `);
  });

  it(`should return a logLoaders preset when built for graphql`, () => {
    const logLoadersPresetGraphql = logLoaders().buildGraphql<TCategoryDraft>();
    expect(logLoadersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "log-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Holzstapel-Lader",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori di Tronchi",
          },
          {
            "locale": "nl-NL",
            "value": "Houtladers",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses de grumes",
          },
          {
            "locale": "en-AU",
            "value": "Log Loaders",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores de troncos",
          },
          {
            "locale": "en-GB",
            "value": "Log Loaders",
          },
          {
            "locale": "en-NZ",
            "value": "Log Loaders",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras de Toras",
          },
          {
            "locale": "en-US",
            "value": "Log Loaders",
          },
        ],
        "orderHint": "0.000017083829434891467155616",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "holz_lader",
          },
          {
            "locale": "it-IT",
            "value": "log_loaders",
          },
          {
            "locale": "nl-NL",
            "value": "log_loaders",
          },
          {
            "locale": "fr-FR",
            "value": "chargeuses_grumes",
          },
          {
            "locale": "en-AU",
            "value": "log_loaders",
          },
          {
            "locale": "es-ES",
            "value": "cargadores_troncos",
          },
          {
            "locale": "en-GB",
            "value": "log_loaders",
          },
          {
            "locale": "en-NZ",
            "value": "log_loaders",
          },
          {
            "locale": "pt-PT",
            "value": "log_loaders",
          },
          {
            "locale": "en-US",
            "value": "log_loaders",
          },
        ],
      }
    `);
  });
});
