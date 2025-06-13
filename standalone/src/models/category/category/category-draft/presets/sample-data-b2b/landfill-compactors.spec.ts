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
        "description": {
          "de": undefined,
          "de-DE": "Verdichter, die für die Deponienutzung konzipiert sind",
          "en": undefined,
          "en-AU": "Compactors designed for landfill use",
          "en-GB": "Compactors designed for landfill use",
          "en-NZ": "Compactors designed for landfill use",
          "en-US": "Compactors designed for landfill use",
          "es-ES": "Compactadores diseñados para uso en vertederos",
          "fr": undefined,
          "fr-FR": "Compacteurs conçus pour une utilisation en décharge",
          "it-IT": "Compattatori progettati per l'uso in discariche",
          "nl-NL": "Verdichters ontworpen voor gebruik in stortplaatsen",
          "pt-PT": "Compactadores projetados para uso em aterros",
        },
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
        "orderHint": "0.0000171136448476519561524",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Verdichter, die für die Deponienutzung konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Compattatori progettati per l'uso in discariche",
          },
          {
            "locale": "nl-NL",
            "value": "Verdichters ontworpen voor gebruik in stortplaatsen",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteurs conçus pour une utilisation en décharge",
          },
          {
            "locale": "en-AU",
            "value": "Compactors designed for landfill use",
          },
          {
            "locale": "es-ES",
            "value": "Compactadores diseñados para uso en vertederos",
          },
          {
            "locale": "en-GB",
            "value": "Compactors designed for landfill use",
          },
          {
            "locale": "en-NZ",
            "value": "Compactors designed for landfill use",
          },
          {
            "locale": "pt-PT",
            "value": "Compactadores projetados para uso em aterros",
          },
          {
            "locale": "en-US",
            "value": "Compactors designed for landfill use",
          },
        ],
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
        "orderHint": "0.0000171136448476519561524",
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
