import type { TCategoryDraft } from '../../../types';
import quarryLoaders from './quarry-loaders';

describe(`with quarryLoaders preset`, () => {
  it(`should return a quarryLoaders preset`, () => {
    const quarryLoadersPreset = quarryLoaders().build<TCategoryDraft>();
    expect(quarryLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "quarry-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Steinbruchlader",
          "en": undefined,
          "en-AU": "Quarry Loaders",
          "en-GB": "Quarry Loaders",
          "en-NZ": "Quarry Loaders",
          "en-US": "Quarry Loaders",
          "es-ES": "Cargadores de cantera",
          "fr": undefined,
          "fr-FR": "Chargeuses de carrière",
          "it-IT": "Caricatori per Cave",
          "nl-NL": "Laders voor Steengroeven",
          "pt-PT": "Carregadeiras de Pedreira",
        },
        "orderHint": "0.00001708382942908348001125",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "steinbruch_lader",
          "en": undefined,
          "en-AU": "quarry_loaders",
          "en-GB": "quarry_loaders",
          "en-NZ": "quarry_loaders",
          "en-US": "quarry_loaders",
          "es-ES": "cargadores_cantera",
          "fr": undefined,
          "fr-FR": "chargeuses_carriere",
          "it-IT": "quarry_loaders",
          "nl-NL": "quarry_loaders",
          "pt-PT": "quarry_loaders",
        },
      }
    `);
  });

  it(`should return a quarryLoaders preset when built for graphql`, () => {
    const quarryLoadersPresetGraphql =
      quarryLoaders().buildGraphql<TCategoryDraft>();
    expect(quarryLoadersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "quarry-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Steinbruchlader",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori per Cave",
          },
          {
            "locale": "nl-NL",
            "value": "Laders voor Steengroeven",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses de carrière",
          },
          {
            "locale": "en-AU",
            "value": "Quarry Loaders",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores de cantera",
          },
          {
            "locale": "en-GB",
            "value": "Quarry Loaders",
          },
          {
            "locale": "en-NZ",
            "value": "Quarry Loaders",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras de Pedreira",
          },
          {
            "locale": "en-US",
            "value": "Quarry Loaders",
          },
        ],
        "orderHint": "0.00001708382942908348001125",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "steinbruch_lader",
          },
          {
            "locale": "it-IT",
            "value": "quarry_loaders",
          },
          {
            "locale": "nl-NL",
            "value": "quarry_loaders",
          },
          {
            "locale": "fr-FR",
            "value": "chargeuses_carriere",
          },
          {
            "locale": "en-AU",
            "value": "quarry_loaders",
          },
          {
            "locale": "es-ES",
            "value": "cargadores_cantera",
          },
          {
            "locale": "en-GB",
            "value": "quarry_loaders",
          },
          {
            "locale": "en-NZ",
            "value": "quarry_loaders",
          },
          {
            "locale": "pt-PT",
            "value": "quarry_loaders",
          },
          {
            "locale": "en-US",
            "value": "quarry_loaders",
          },
        ],
      }
    `);
  });
});
