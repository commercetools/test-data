import type { TStoreDraft } from '../../../types';
import defaultStore from './default-store';

describe(`with defaultStore preset`, () => {
  it(`should return a defaultStore preset`, () => {
    const defaultStorePreset = defaultStore().build<TStoreDraft>();
    expect(defaultStorePreset).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "default-store",
        "languages": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Standard",
          "en": undefined,
          "en-AU": "Default",
          "en-GB": "Default",
          "en-NZ": "Default",
          "en-UK": "Default",
          "en-US": "Default",
          "es-ES": "Predeterminado",
          "fr": undefined,
          "fr-FR": "Défaut",
          "it-IT": "Predefinito",
          "nl-NL": "Standaard",
          "pt-PT": "Padrão",
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it(`should return a defaultStore preset when built for graphql`, () => {
    const defaultStorePresetGraphql =
      defaultStore().buildGraphql<TStoreDraft>();
    expect(defaultStorePresetGraphql).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
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
            "locale": "en-UK",
            "value": "Default",
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
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
});
