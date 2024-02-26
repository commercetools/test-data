import type { TProductDraft } from '../../../types';
import s567Uv from './s-567-uv';

describe(`with s567Uv preset`, () => {
  it(`should return a s567Uv preset`, () => {
    const s567UvPreset = s567Uv().build<TProductDraft>();
    expect(s567UvPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Amphibienbagger mit hoher Kapazität für effiziente Aushubanwendungen an Land und im Wasser.",
          "en": undefined,
          "en-AU": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          "en-GB": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          "en-NZ": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          "en-UK": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          "en-US": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          "es-ES": "Excavadora anfibia de alta capacidad para aplicaciones eficientes de excavación en tierra y agua.",
          "fr": undefined,
          "fr-FR": "Excavateur amphibie haute capacité pour des applications d&#39;excavation efficaces sur terre et dans l&#39;eau.",
          "it-IT": "Escavatore anfibio ad alta capacità per applicazioni efficienti di scavo in terra e in acqua.",
          "nl-NL": "Hoogcapaciteits amfibische graafmachine voor efficiënte land- en watergraaf toepassingen.",
          "pt-PT": "Escavadeira anfíbia de alta capacidade para aplicações eficientes de escavação em terra e água.",
        },
        "key": "s567-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 700,
            },
            {
              "name": "model",
              "value": 2015,
            },
            {
              "name": "iso45001",
              "value": false,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "s567-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "S567 UV Amphibienbagger",
          "en": undefined,
          "en-AU": "S567 UV Amphibious Excavator",
          "en-GB": "S567 UV Amphibious Excavator",
          "en-NZ": "S567 UV Amphibious Excavator",
          "en-UK": "S567 UV Amphibious Excavator",
          "en-US": "S567 UV Amphibious Excavator",
          "es-ES": "S567 UV Excavadora anfibia",
          "fr": undefined,
          "fr-FR": "S567 UV Excavateur amphibie",
          "it-IT": "S567 UV Escavatore Anfibio",
          "nl-NL": "S567 UV Amfibische Graafmachine",
          "pt-PT": "S567 UV Escavadeira Anfíbia",
        },
        "priceMode": undefined,
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "s567-uv",
          "en": undefined,
          "en-AU": "s567-uv",
          "en-GB": "s567-uv",
          "en-NZ": "s567-uv",
          "en-UK": "s567-uv",
          "en-US": "s567-uv",
          "es-ES": "s567-uv",
          "fr": undefined,
          "fr-FR": "s567-uv",
          "it-IT": "s567-uv",
          "nl-NL": "s567-uv",
          "pt-PT": "s567-uv",
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
                "value": 700,
              },
              {
                "name": "model",
                "value": 2019,
              },
              {
                "name": "iso45001",
                "value": false,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "s567-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 700,
              },
              {
                "name": "model",
                "value": 2023,
              },
              {
                "name": "iso45001",
                "value": false,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "s567-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a s567Uv preset when built for graphql`, () => {
    const s567UvPresetGraphql = s567Uv().buildGraphql<TProductDraft>();
    expect(s567UvPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Amphibienbagger mit hoher Kapazität für effiziente Aushubanwendungen an Land und im Wasser.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore anfibio ad alta capacità per applicazioni efficienti di scavo in terra e in acqua.",
          },
          {
            "locale": "en-UK",
            "value": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits amfibische graafmachine voor efficiënte land- en watergraaf toepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur amphibie haute capacité pour des applications d&#39;excavation efficaces sur terre et dans l&#39;eau.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora anfibia de alta capacidad para aplicaciones eficientes de excavación en tierra y agua.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira anfíbia de alta capacidade para aplicações eficientes de escavação em terra e água.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity amphibious excavator for efficient land and water excavation applications.",
          },
        ],
        "key": "s567-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "700",
            },
            {
              "name": "model",
              "value": "2015",
            },
            {
              "name": "iso45001",
              "value": "false",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "s567-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "S567 UV Amphibienbagger",
          },
          {
            "locale": "it-IT",
            "value": "S567 UV Escavatore Anfibio",
          },
          {
            "locale": "en-UK",
            "value": "S567 UV Amphibious Excavator",
          },
          {
            "locale": "nl-NL",
            "value": "S567 UV Amfibische Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "S567 UV Excavateur amphibie",
          },
          {
            "locale": "en-AU",
            "value": "S567 UV Amphibious Excavator",
          },
          {
            "locale": "es-ES",
            "value": "S567 UV Excavadora anfibia",
          },
          {
            "locale": "en-GB",
            "value": "S567 UV Amphibious Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "S567 UV Amphibious Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "S567 UV Escavadeira Anfíbia",
          },
          {
            "locale": "en-US",
            "value": "S567 UV Amphibious Excavator",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "s567-uv",
          },
          {
            "locale": "it-IT",
            "value": "s567-uv",
          },
          {
            "locale": "en-UK",
            "value": "s567-uv",
          },
          {
            "locale": "nl-NL",
            "value": "s567-uv",
          },
          {
            "locale": "fr-FR",
            "value": "s567-uv",
          },
          {
            "locale": "en-AU",
            "value": "s567-uv",
          },
          {
            "locale": "es-ES",
            "value": "s567-uv",
          },
          {
            "locale": "en-GB",
            "value": "s567-uv",
          },
          {
            "locale": "en-NZ",
            "value": "s567-uv",
          },
          {
            "locale": "pt-PT",
            "value": "s567-uv",
          },
          {
            "locale": "en-US",
            "value": "s567-uv",
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
                "value": "700",
              },
              {
                "name": "model",
                "value": "2019",
              },
              {
                "name": "iso45001",
                "value": "false",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "s567-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "700",
              },
              {
                "name": "model",
                "value": "2023",
              },
              {
                "name": "iso45001",
                "value": "false",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "s567-uv-2023",
          },
        ],
      }
    `);
  });
});
