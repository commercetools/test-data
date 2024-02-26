import type { TCategoryDraft } from '../../../types';
import largeHydraulicHammers from './large-hydraulic-hammers';

describe(`with largeHydraulicHammers preset`, () => {
  it(`should return a largeHydraulicHammers preset`, () => {
    const largeHydraulicHammersPreset =
      largeHydraulicHammers().build<TCategoryDraft>();
    expect(largeHydraulicHammersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-hydraulic-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Hydraulische Hämmer",
          "en": undefined,
          "en-AU": "Hydraulic Hammers",
          "en-GB": "Hydraulic Hammers",
          "en-NZ": "Hydraulic Hammers",
          "en-US": "Hydraulic Hammers",
          "es-ES": "Martillos hidráulicos",
          "fr": undefined,
          "fr-FR": "Marteaux hydrauliques",
          "it-IT": "Martelli Idraulici",
          "nl-NL": "Hydraulische Hamers",
          "pt-PT": "Martelos Hidráulicos",
        },
        "orderHint": "0.000017083829393162045787358",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "grosse_hydraulikhaemmer",
          "en": undefined,
          "en-AU": "large_hydraulic_hammers",
          "en-GB": "large_hydraulic_hammers",
          "en-NZ": "large_hydraulic_hammers",
          "en-US": "large_hydraulic_hammers",
          "es-ES": "martillos_hidraulicos_grandes",
          "fr": undefined,
          "fr-FR": "marteaux_hydrauliques_grande_taille",
          "it-IT": "large_hydraulic_hammers",
          "nl-NL": "large_hydraulic_hammers",
          "pt-PT": "large_hydraulic_hammers",
        },
      }
    `);
  });

  it(`should return a largeHydraulicHammers preset when built for graphql`, () => {
    const largeHydraulicHammersPresetGraphql =
      largeHydraulicHammers().buildGraphql<TCategoryDraft>();
    expect(largeHydraulicHammersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-hydraulic-hammers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Hydraulische Hämmer",
          },
          {
            "locale": "it-IT",
            "value": "Martelli Idraulici",
          },
          {
            "locale": "nl-NL",
            "value": "Hydraulische Hamers",
          },
          {
            "locale": "fr-FR",
            "value": "Marteaux hydrauliques",
          },
          {
            "locale": "en-AU",
            "value": "Hydraulic Hammers",
          },
          {
            "locale": "es-ES",
            "value": "Martillos hidráulicos",
          },
          {
            "locale": "en-GB",
            "value": "Hydraulic Hammers",
          },
          {
            "locale": "en-NZ",
            "value": "Hydraulic Hammers",
          },
          {
            "locale": "pt-PT",
            "value": "Martelos Hidráulicos",
          },
          {
            "locale": "en-US",
            "value": "Hydraulic Hammers",
          },
        ],
        "orderHint": "0.000017083829393162045787358",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "grosse_hydraulikhaemmer",
          },
          {
            "locale": "it-IT",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "nl-NL",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "fr-FR",
            "value": "marteaux_hydrauliques_grande_taille",
          },
          {
            "locale": "en-AU",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "es-ES",
            "value": "martillos_hidraulicos_grandes",
          },
          {
            "locale": "en-GB",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "en-NZ",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "pt-PT",
            "value": "large_hydraulic_hammers",
          },
          {
            "locale": "en-US",
            "value": "large_hydraulic_hammers",
          },
        ],
      }
    `);
  });
});
