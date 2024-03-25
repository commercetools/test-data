import type { TProductDraft } from '../../../types';
import p234Qw from './p-234-qw';

describe(`with p234Qw preset`, () => {
  it(`should return a p234Qw preset`, () => {
    const p234QwPreset = p234Qw().build<TProductDraft>();
    expect(p234QwPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "amphibious-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Amphibienbagger, konzipiert für land- und wasserbasierte Aushubprojekte.",
          "en": undefined,
          "en-AU": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          "en-GB": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          "en-NZ": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          "en-US": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          "es-ES": "Excavadora anfibia versátil diseñada para proyectos de excavación en tierra y agua.",
          "fr": undefined,
          "fr-FR": "Excavateur amphibie polyvalent conçu pour des projets d&#39;excavation à la fois sur terre et dans l&#39;eau.",
          "it-IT": "Escavatore anfibio versatile progettato sia per progetti di scavo terrestri che acquatici.",
          "nl-NL": "Veelzijdige amfibische graafmachine ontworpen voor zowel land- als watergebonden graafprojecten.",
          "pt-PT": "Escavadeira anfíbia versátil projetada para projetos de escavação em terra e água.",
        },
        "key": "p234-qw",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 600,
            },
            {
              "name": "model",
              "value": 2015,
            },
            {
              "name": "iso45001",
              "value": true,
            },
            {
              "name": "mobility",
              "value": {
                "key": "tracked",
                "label": "Tracked",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "p234-qw-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "P234 QW Amphibienbagger",
          "en": undefined,
          "en-AU": "P234 QW Amphibious Excavator",
          "en-GB": "P234 QW Amphibious Excavator",
          "en-NZ": "P234 QW Amphibious Excavator",
          "en-US": "P234 QW Amphibious Excavator",
          "es-ES": "P234 QW Excavadora anfibia",
          "fr": undefined,
          "fr-FR": "P234 QW Excavateur amphibie",
          "it-IT": "P234 QW Escavatore Anfibio",
          "nl-NL": "P234 QW Amfibische Graafmachine",
          "pt-PT": "P234 QW Escavadeira Anfíbia",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "p234-qw",
          "en": undefined,
          "en-AU": "p234-qw",
          "en-GB": "p234-qw",
          "en-NZ": "p234-qw",
          "en-US": "p234-qw",
          "es-ES": "p234-qw",
          "fr": undefined,
          "fr-FR": "p234-qw",
          "it-IT": "p234-qw",
          "nl-NL": "p234-qw",
          "pt-PT": "p234-qw",
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 600,
              },
              {
                "name": "model",
                "value": 2019,
              },
              {
                "name": "iso45001",
                "value": true,
              },
              {
                "name": "mobility",
                "value": {
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "p234-qw-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 600,
              },
              {
                "name": "model",
                "value": 2023,
              },
              {
                "name": "iso45001",
                "value": true,
              },
              {
                "name": "mobility",
                "value": {
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "p234-qw-2023",
          },
        ],
      }
    `);
  });

  it(`should return a p234Qw preset when built for graphql`, () => {
    const p234QwPresetGraphql = p234Qw().buildGraphql<TProductDraft>();
    expect(p234QwPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "amphibious-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Amphibienbagger, konzipiert für land- und wasserbasierte Aushubprojekte.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore anfibio versatile progettato sia per progetti di scavo terrestri che acquatici.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige amfibische graafmachine ontworpen voor zowel land- als watergebonden graafprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur amphibie polyvalent conçu pour des projets d&#39;excavation à la fois sur terre et dans l&#39;eau.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora anfibia versátil diseñada para proyectos de excavación en tierra y agua.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira anfíbia versátil projetada para projetos de escavação em terra e água.",
          },
          {
            "locale": "en-US",
            "value": "Versatile amphibious excavator designed for both land and water-based excavation projects.",
          },
        ],
        "key": "p234-qw",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "600",
            },
            {
              "name": "model",
              "value": "2015",
            },
            {
              "name": "iso45001",
              "value": "true",
            },
            {
              "name": "mobility",
              "value": "{"key":"tracked","label":"Tracked"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "p234-qw-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "P234 QW Amphibienbagger",
          },
          {
            "locale": "it-IT",
            "value": "P234 QW Escavatore Anfibio",
          },
          {
            "locale": "nl-NL",
            "value": "P234 QW Amfibische Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "P234 QW Excavateur amphibie",
          },
          {
            "locale": "en-AU",
            "value": "P234 QW Amphibious Excavator",
          },
          {
            "locale": "es-ES",
            "value": "P234 QW Excavadora anfibia",
          },
          {
            "locale": "en-GB",
            "value": "P234 QW Amphibious Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "P234 QW Amphibious Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "P234 QW Escavadeira Anfíbia",
          },
          {
            "locale": "en-US",
            "value": "P234 QW Amphibious Excavator",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "p234-qw",
          },
          {
            "locale": "it-IT",
            "value": "p234-qw",
          },
          {
            "locale": "nl-NL",
            "value": "p234-qw",
          },
          {
            "locale": "fr-FR",
            "value": "p234-qw",
          },
          {
            "locale": "en-AU",
            "value": "p234-qw",
          },
          {
            "locale": "es-ES",
            "value": "p234-qw",
          },
          {
            "locale": "en-GB",
            "value": "p234-qw",
          },
          {
            "locale": "en-NZ",
            "value": "p234-qw",
          },
          {
            "locale": "pt-PT",
            "value": "p234-qw",
          },
          {
            "locale": "en-US",
            "value": "p234-qw",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "600",
              },
              {
                "name": "model",
                "value": "2019",
              },
              {
                "name": "iso45001",
                "value": "true",
              },
              {
                "name": "mobility",
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "p234-qw-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "600",
              },
              {
                "name": "model",
                "value": "2023",
              },
              {
                "name": "iso45001",
                "value": "true",
              },
              {
                "name": "mobility",
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "p234-qw-2023",
          },
        ],
      }
    `);
  });
});
