import type { TProductDraft } from '../../../types';
import mm123Qr from './mm-123-qr';

describe(`with mm123Qr preset`, () => {
  it(`should return a mm123Qr preset`, () => {
    const mm123QrPreset = mm123Qr().build<TProductDraft>();
    expect(mm123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "wheeled-excavators-for-construction",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Radbagger mit fortschrittlichen Funktionen für effiziente Ausgrabungen auf Baustellen.",
          "en": undefined,
          "en-AU": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          "en-GB": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          "en-NZ": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          "en-US": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          "es-ES": "Excavadora de ruedas versátil con características avanzadas para excavaciones eficientes en el sitio de construcción.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues polyvalente avec des fonctionnalités avancées pour une excavation efficace sur le chantier de construction.",
          "it-IT": "Escavatore su ruote versatile con caratteristiche avanzate per scavi efficienti nei cantieri edili.",
          "nl-NL": "Veelzijdige wiellader met geavanceerde functies voor efficiënte graafwerkzaamheden op bouwplaatsen.",
          "pt-PT": "Escavadeira com rodas versátil com recursos avançados para escavação eficiente em canteiros de obras.",
        },
        "key": "mm123-qr",
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
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "mm123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "MM123 QR Radbagger für Bau",
          "en": undefined,
          "en-AU": "MM123 QR Wheeled Excavator for Construction",
          "en-GB": "MM123 QR Wheeled Excavator for Construction",
          "en-NZ": "MM123 QR Wheeled Excavator for Construction",
          "en-US": "MM123 QR Wheeled Excavator for Construction",
          "es-ES": "MM123 QR Excavadora de ruedas para construcción",
          "fr": undefined,
          "fr-FR": "MM123 QR Excavatrice sur roues pour la construction",
          "it-IT": "MM123 QR Escavatore su Ruote per Costruzioni",
          "nl-NL": "MM123 QR Wiellader voor Bouw",
          "pt-PT": "MM123 QR Escavadeira com Rodas para Construção",
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
          "de-DE": "mm123-qr",
          "en": undefined,
          "en-AU": "mm123-qr",
          "en-GB": "mm123-qr",
          "en-NZ": "mm123-qr",
          "en-US": "mm123-qr",
          "es-ES": "mm123-qr",
          "fr": undefined,
          "fr-FR": "mm123-qr",
          "it-IT": "mm123-qr",
          "nl-NL": "mm123-qr",
          "pt-PT": "mm123-qr",
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
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "mm123-qr-2019",
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
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "mm123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a mm123Qr preset when built for graphql`, () => {
    const mm123QrPresetGraphql = mm123Qr().buildGraphql<TProductDraft>();
    expect(mm123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "wheeled-excavators-for-construction",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Radbagger mit fortschrittlichen Funktionen für effiziente Ausgrabungen auf Baustellen.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore su ruote versatile con caratteristiche avanzate per scavi efficienti nei cantieri edili.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige wiellader met geavanceerde functies voor efficiënte graafwerkzaamheden op bouwplaatsen.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues polyvalente avec des fonctionnalités avancées pour une excavation efficace sur le chantier de construction.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas versátil con características avanzadas para excavaciones eficientes en el sitio de construcción.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira com rodas versátil com recursos avançados para escavação eficiente em canteiros de obras.",
          },
          {
            "locale": "en-US",
            "value": "Versatile wheeled excavator with advanced features for efficient construction site excavation.",
          },
        ],
        "key": "mm123-qr",
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
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "mm123-qr-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "MM123 QR Radbagger für Bau",
          },
          {
            "locale": "it-IT",
            "value": "MM123 QR Escavatore su Ruote per Costruzioni",
          },
          {
            "locale": "nl-NL",
            "value": "MM123 QR Wiellader voor Bouw",
          },
          {
            "locale": "fr-FR",
            "value": "MM123 QR Excavatrice sur roues pour la construction",
          },
          {
            "locale": "en-AU",
            "value": "MM123 QR Wheeled Excavator for Construction",
          },
          {
            "locale": "es-ES",
            "value": "MM123 QR Excavadora de ruedas para construcción",
          },
          {
            "locale": "en-GB",
            "value": "MM123 QR Wheeled Excavator for Construction",
          },
          {
            "locale": "en-NZ",
            "value": "MM123 QR Wheeled Excavator for Construction",
          },
          {
            "locale": "pt-PT",
            "value": "MM123 QR Escavadeira com Rodas para Construção",
          },
          {
            "locale": "en-US",
            "value": "MM123 QR Wheeled Excavator for Construction",
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
            "value": "mm123-qr",
          },
          {
            "locale": "it-IT",
            "value": "mm123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "mm123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "mm123-qr",
          },
          {
            "locale": "en-AU",
            "value": "mm123-qr",
          },
          {
            "locale": "es-ES",
            "value": "mm123-qr",
          },
          {
            "locale": "en-GB",
            "value": "mm123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "mm123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "mm123-qr",
          },
          {
            "locale": "en-US",
            "value": "mm123-qr",
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
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "mm123-qr-2019",
            "staged": true,
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
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "mm123-qr-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
