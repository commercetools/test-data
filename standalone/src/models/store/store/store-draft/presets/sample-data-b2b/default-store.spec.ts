import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './default-store';

describe(`with defaultStore preset`, () => {
  it('should return a defaultStore REST preset object', () => {
    const defaultStorePresetRest = restPreset().build<TStoreDraftRest>();
    expect(defaultStorePresetRest).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "default-channel",
            "typeId": "channel",
          },
        ],
        "key": "default-store",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Standard",
          "en": undefined,
          "en-AU": "Default",
          "en-GB": "Default",
          "en-NZ": "Default",
          "en-US": "Default",
          "es-ES": "Predeterminado",
          "fr": undefined,
          "fr-FR": "Défaut",
          "it-IT": "Predefinito",
          "nl-NL": "Standaard",
          "pt-PT": "Padrão",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "default-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it('should return a defaultStore GraphQL preset object', () => {
    const defaultStorePresetGraphql =
      graphqlPreset().build<TStoreDraftGraphql>();
    expect(defaultStorePresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "default-channel",
            "typeId": "channel",
          },
        ],
        "key": "default-store",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Standard",
          },
          {
            "locale": "it-IT",
            "value": "Predefinito",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard",
          },
          {
            "locale": "fr-FR",
            "value": "Défaut",
          },
          {
            "locale": "en-AU",
            "value": "Default",
          },
          {
            "locale": "es-ES",
            "value": "Predeterminado",
          },
          {
            "locale": "en-GB",
            "value": "Default",
          },
          {
            "locale": "en-NZ",
            "value": "Default",
          },
          {
            "locale": "pt-PT",
            "value": "Padrão",
          },
          {
            "locale": "en-US",
            "value": "Default",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "default-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it('should return a defaultStore REST preset object from compat preset', () => {
    const defaultStorePreset = compatPreset().build<TStoreDraftRest>();
    expect(defaultStorePreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "default-channel",
            "typeId": "channel",
          },
        ],
        "key": "default-store",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Standard",
          "en": undefined,
          "en-AU": "Default",
          "en-GB": "Default",
          "en-NZ": "Default",
          "en-US": "Default",
          "es-ES": "Predeterminado",
          "fr": undefined,
          "fr-FR": "Défaut",
          "it-IT": "Predefinito",
          "nl-NL": "Standaard",
          "pt-PT": "Padrão",
        },
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "default-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });

  it('should return a defaultStore GraphQL preset object from compat preset', () => {
    const defaultStorePresetGraphql =
      compatPreset().buildGraphql<TStoreDraftGraphql>();
    expect(defaultStorePresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": [
          {
            "key": "default-channel",
            "typeId": "channel",
          },
        ],
        "key": "default-store",
        "languages": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Standard",
          },
          {
            "locale": "it-IT",
            "value": "Predefinito",
          },
          {
            "locale": "nl-NL",
            "value": "Standaard",
          },
          {
            "locale": "fr-FR",
            "value": "Défaut",
          },
          {
            "locale": "en-AU",
            "value": "Default",
          },
          {
            "locale": "es-ES",
            "value": "Predeterminado",
          },
          {
            "locale": "en-GB",
            "value": "Default",
          },
          {
            "locale": "en-NZ",
            "value": "Default",
          },
          {
            "locale": "pt-PT",
            "value": "Padrão",
          },
          {
            "locale": "en-US",
            "value": "Default",
          },
        ],
        "productSelections": [
          {
            "active": true,
            "productSelection": {
              "key": "default-product-selection",
              "typeId": "product-selection",
            },
          },
        ],
        "supplyChannels": [
          {
            "key": "default-warehouse",
            "typeId": "channel",
          },
        ],
      }
    `);
  });
});
