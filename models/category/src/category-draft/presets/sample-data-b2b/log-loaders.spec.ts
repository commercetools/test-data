import type { TCategoryDraft } from '../../../types';
import logLoaders from './log-loaders';

describe(`with logLoaders preset`, () => {
  it(`should return a logLoaders preset`, () => {
    const logLoadersPreset = logLoaders().build<TCategoryDraft>();
    expect(logLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Lader, spezialisiert auf das Handling von Holzstapeln",
          "en-AU": "Loaders specialized for log handling",
          "en-GB": "Loaders specialized for log handling",
          "en-NZ": "Loaders specialized for log handling",
          "en-US": "Loaders specialized for log handling",
          "es-ES": "Cargadores especializados para el manejo de troncos",
          "fr-FR": "Chargeuses spécialisées dans la manipulation de grumes",
          "it-IT": "Caricatori specializzati per la manipolazione di tronchi",
          "nl-NL": "Laders gespecialiseerd in houtverwerking",
          "pt-PT": "Carregadeiras especializadas para manuseio de toras",
        },
        "externalId": undefined,
        "key": "log-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Holzstapel-Lader",
          "en-AU": "Log Loaders",
          "en-GB": "Log Loaders",
          "en-NZ": "Log Loaders",
          "en-US": "Log Loaders",
          "es-ES": "Cargadores de troncos",
          "fr-FR": "Chargeuses de grumes",
          "it-IT": "Caricatori di Tronchi",
          "nl-NL": "Houtladers",
          "pt-PT": "Carregadeiras de Toras",
        },
        "orderHint": "0.00001711364484753190019805",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "holz_lader",
          "en-AU": "log_loaders",
          "en-GB": "log_loaders",
          "en-NZ": "log_loaders",
          "en-US": "log_loaders",
          "es-ES": "cargadores_troncos",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Lader, spezialisiert auf das Handling von Holzstapeln",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori specializzati per la manipolazione di tronchi",
          },
          {
            "locale": "nl-NL",
            "value": "Laders gespecialiseerd in houtverwerking",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses spécialisées dans la manipulation de grumes",
          },
          {
            "locale": "en-AU",
            "value": "Loaders specialized for log handling",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores especializados para el manejo de troncos",
          },
          {
            "locale": "en-GB",
            "value": "Loaders specialized for log handling",
          },
          {
            "locale": "en-NZ",
            "value": "Loaders specialized for log handling",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras especializadas para manuseio de toras",
          },
          {
            "locale": "en-US",
            "value": "Loaders specialized for log handling",
          },
        ],
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
        "orderHint": "0.00001711364484753190019805",
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
