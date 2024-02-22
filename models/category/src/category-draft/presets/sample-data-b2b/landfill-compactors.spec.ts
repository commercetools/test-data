import type { TCategoryDraft } from '../../../types';
import landfillCompactors from './landfill-compactors';

describe(`with landfillCompactors preset`, () => {
  it(`should return a landfillCompactors preset`, () => {
    const landfillCompactorsPreset =
      landfillCompactors().build<TCategoryDraft>();
    expect(landfillCompactorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "landfill-compactors",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Deponie-Verdichter",
          "en": undefined,
          "en-AU": "Landfill Compactors",
          "en-GB": "Landfill Compactors",
          "en-NZ": "Landfill Compactors",
          "en-US": "Landfill Compactors",
          "es-ES": "Compactadores de vertederos",
          "fr": undefined,
          "fr-FR": "Compacteurs de décharge",
          "it-IT": "Compattatori per Discariche",
          "nl-NL": "Stortplaatsverdichters",
          "pt-PT": "Compactadores de Aterro",
        },
        "orderHint": "0.000017083829481041966423080",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "deponie_verdichter",
          "en": undefined,
          "en-AU": "landfill_compactors",
          "en-GB": "landfill_compactors",
          "en-NZ": "landfill_compactors",
          "en-US": "landfill_compactors",
          "es-ES": "compactadores_vertederos",
          "fr": undefined,
          "fr-FR": "compacteurs_decharge",
          "it-IT": "landfill_compactors",
          "nl-NL": "landfill_compactors",
          "pt-PT": "landfill_compactors",
        },
      }
    `);
  });

  it(`should return a landfillCompactors preset when built for graphql`, () => {
    const landfillCompactorsPresetGraphql =
      landfillCompactors().buildGraphql<TCategoryDraft>();
    expect(landfillCompactorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "landfill-compactors",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Deponie-Verdichter",
          },
          {
            "locale": "it-IT",
            "value": "Compattatori per Discariche",
          },
          {
            "locale": "nl-NL",
            "value": "Stortplaatsverdichters",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteurs de décharge",
          },
          {
            "locale": "en-AU",
            "value": "Landfill Compactors",
          },
          {
            "locale": "es-ES",
            "value": "Compactadores de vertederos",
          },
          {
            "locale": "en-GB",
            "value": "Landfill Compactors",
          },
          {
            "locale": "en-NZ",
            "value": "Landfill Compactors",
          },
          {
            "locale": "pt-PT",
            "value": "Compactadores de Aterro",
          },
          {
            "locale": "en-US",
            "value": "Landfill Compactors",
          },
        ],
        "orderHint": "0.000017083829481041966423080",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "deponie_verdichter",
          },
          {
            "locale": "it-IT",
            "value": "landfill_compactors",
          },
          {
            "locale": "nl-NL",
            "value": "landfill_compactors",
          },
          {
            "locale": "fr-FR",
            "value": "compacteurs_decharge",
          },
          {
            "locale": "en-AU",
            "value": "landfill_compactors",
          },
          {
            "locale": "es-ES",
            "value": "compactadores_vertederos",
          },
          {
            "locale": "en-GB",
            "value": "landfill_compactors",
          },
          {
            "locale": "en-NZ",
            "value": "landfill_compactors",
          },
          {
            "locale": "pt-PT",
            "value": "landfill_compactors",
          },
          {
            "locale": "en-US",
            "value": "landfill_compactors",
          },
        ],
      }
    `);
  });
});
