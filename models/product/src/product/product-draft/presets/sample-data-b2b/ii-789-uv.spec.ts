import type { TProductDraft } from '../../../types';
import ii789Uv from './ii-789-uv';

describe(`with ii789Uv preset`, () => {
  it(`should return a ii789Uv preset`, () => {
    const ii789UvPreset = ii789Uv().build<TProductDraft>();
    expect(ii789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "pneumatic-rollers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Pneumatikwalze mit hoher Kapazität und fortschrittlichen Funktionen für effiziente Verdichtung.",
          "en": undefined,
          "en-AU": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          "en-GB": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          "en-NZ": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          "en-US": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          "es-ES": "Rodillo neumático de alta capacidad con características avanzadas para una compactación eficiente.",
          "fr": undefined,
          "fr-FR": "Rouleau pneumatique haute capacité avec des fonctionnalités avancées pour une compactage efficace.",
          "it-IT": "Rullo pneumatico ad alta capacità con caratteristiche avanzate per una compattazione efficiente.",
          "nl-NL": "Hoogcapaciteits pneumatische wals met geavanceerde functies voor efficiënte verdichting.",
          "pt-PT": "Rolo pneumático de alta capacidade com recursos avançados para compactação eficiente.",
        },
        "key": "ii789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 800,
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
                "key": "wheeled",
                "label": "Wheeled",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ii789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "II789 UV Pneumatische Walze",
          "en": undefined,
          "en-AU": "II789 UV Pneumatic Roller",
          "en-GB": "II789 UV Pneumatic Roller",
          "en-NZ": "II789 UV Pneumatic Roller",
          "en-US": "II789 UV Pneumatic Roller",
          "es-ES": "II789 UV Rodillo neumático",
          "fr": undefined,
          "fr-FR": "II789 UV Rouleau pneumatique",
          "it-IT": "II789 UV Rullo Pneumatico",
          "nl-NL": "II789 UV Pneumatische Wals",
          "pt-PT": "II789 UV Rolo Pneumático",
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
          "de-DE": "ii789-uv",
          "en": undefined,
          "en-AU": "ii789-uv",
          "en-GB": "ii789-uv",
          "en-NZ": "ii789-uv",
          "en-US": "ii789-uv",
          "es-ES": "ii789-uv",
          "fr": undefined,
          "fr-FR": "ii789-uv",
          "it-IT": "ii789-uv",
          "nl-NL": "ii789-uv",
          "pt-PT": "ii789-uv",
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
                "value": 800,
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
                  "key": "wheeled",
                  "label": "Wheeled",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ii789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
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
                  "key": "wheeled",
                  "label": "Wheeled",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ii789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a ii789Uv preset when built for graphql`, () => {
    const ii789UvPresetGraphql = ii789Uv().buildGraphql<TProductDraft>();
    expect(ii789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "pneumatic-rollers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Pneumatikwalze mit hoher Kapazität und fortschrittlichen Funktionen für effiziente Verdichtung.",
          },
          {
            "locale": "it-IT",
            "value": "Rullo pneumatico ad alta capacità con caratteristiche avanzate per una compattazione efficiente.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits pneumatische wals met geavanceerde functies voor efficiënte verdichting.",
          },
          {
            "locale": "fr-FR",
            "value": "Rouleau pneumatique haute capacité avec des fonctionnalités avancées pour une compactage efficace.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          },
          {
            "locale": "es-ES",
            "value": "Rodillo neumático de alta capacidad con características avanzadas para una compactación eficiente.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          },
          {
            "locale": "pt-PT",
            "value": "Rolo pneumático de alta capacidade com recursos avançados para compactação eficiente.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity pneumatic roller with advanced features for efficient compaction.",
          },
        ],
        "key": "ii789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "800",
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
              "value": "{"key":"wheeled","label":"Wheeled"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ii789-uv-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "II789 UV Pneumatische Walze",
          },
          {
            "locale": "it-IT",
            "value": "II789 UV Rullo Pneumatico",
          },
          {
            "locale": "nl-NL",
            "value": "II789 UV Pneumatische Wals",
          },
          {
            "locale": "fr-FR",
            "value": "II789 UV Rouleau pneumatique",
          },
          {
            "locale": "en-AU",
            "value": "II789 UV Pneumatic Roller",
          },
          {
            "locale": "es-ES",
            "value": "II789 UV Rodillo neumático",
          },
          {
            "locale": "en-GB",
            "value": "II789 UV Pneumatic Roller",
          },
          {
            "locale": "en-NZ",
            "value": "II789 UV Pneumatic Roller",
          },
          {
            "locale": "pt-PT",
            "value": "II789 UV Rolo Pneumático",
          },
          {
            "locale": "en-US",
            "value": "II789 UV Pneumatic Roller",
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
            "value": "ii789-uv",
          },
          {
            "locale": "it-IT",
            "value": "ii789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "ii789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "ii789-uv",
          },
          {
            "locale": "en-AU",
            "value": "ii789-uv",
          },
          {
            "locale": "es-ES",
            "value": "ii789-uv",
          },
          {
            "locale": "en-GB",
            "value": "ii789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "ii789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "ii789-uv",
          },
          {
            "locale": "en-US",
            "value": "ii789-uv",
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
                "value": "800",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ii789-uv-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ii789-uv-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
