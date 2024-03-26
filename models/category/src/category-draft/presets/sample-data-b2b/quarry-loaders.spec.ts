import type { TCategoryDraft } from '../../../types';
import quarryLoaders from './quarry-loaders';

describe(`with quarryLoaders preset`, () => {
  it(`should return a quarryLoaders preset`, () => {
    const quarryLoadersPreset = quarryLoaders().build<TCategoryDraft>();
    expect(quarryLoadersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Lader, die in Steinbruchoperationen verwendet werden",
          "en-AU": "Loaders used in quarry operations",
          "en-GB": "Loaders used in quarry operations",
          "en-NZ": "Loaders used in quarry operations",
          "en-US": "Loaders used in quarry operations",
          "es-ES": "Cargadores utilizados en operaciones de cantera",
          "fr-FR": "Chargeuses utilisées dans les opérations de carrière",
          "it-IT": "Caricatori utilizzati in operazioni di cava",
          "nl-NL": "Laders gebruikt in steengroeve operaties",
          "pt-PT": "Carregadeiras usadas em operações de pedreira",
        },
        "externalId": undefined,
        "key": "quarry-loaders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Steinbruchlader",
          "en-AU": "Quarry Loaders",
          "en-GB": "Quarry Loaders",
          "en-NZ": "Quarry Loaders",
          "en-US": "Quarry Loaders",
          "es-ES": "Cargadores de cantera",
          "fr-FR": "Chargeuses de carrière",
          "it-IT": "Caricatori per Cave",
          "nl-NL": "Laders voor Steengroeven",
          "pt-PT": "Carregadeiras de Pedreira",
        },
        "orderHint": "0.000017113644847331158997483",
        "parent": {
          "key": "high-capacity-front-end-loaders",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "steinbruch_lader",
          "en-AU": "quarry_loaders",
          "en-GB": "quarry_loaders",
          "en-NZ": "quarry_loaders",
          "en-US": "quarry_loaders",
          "es-ES": "cargadores_cantera",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Lader, die in Steinbruchoperationen verwendet werden",
          },
          {
            "locale": "it-IT",
            "value": "Caricatori utilizzati in operazioni di cava",
          },
          {
            "locale": "nl-NL",
            "value": "Laders gebruikt in steengroeve operaties",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeuses utilisées dans les opérations de carrière",
          },
          {
            "locale": "en-AU",
            "value": "Loaders used in quarry operations",
          },
          {
            "locale": "es-ES",
            "value": "Cargadores utilizados en operaciones de cantera",
          },
          {
            "locale": "en-GB",
            "value": "Loaders used in quarry operations",
          },
          {
            "locale": "en-NZ",
            "value": "Loaders used in quarry operations",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeiras usadas em operações de pedreira",
          },
          {
            "locale": "en-US",
            "value": "Loaders used in quarry operations",
          },
        ],
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
        "orderHint": "0.000017113644847331158997483",
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
