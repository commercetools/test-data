import type { TProductDraft } from '../../../types';
import u123Qr from './u-123-qr';

describe(`with u123Qr preset`, () => {
  it(`should return a u123Qr preset`, () => {
    const u123QrPreset = u123Qr().build<TProductDraft>();
    expect(u123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "articulated-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Gelenkdumper für den effizienten Transport von schweren Lasten in Bau- und Bergbauanwendungen.",
          "en": undefined,
          "en-AU": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          "en-GB": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          "en-NZ": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          "en-UK": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          "en-US": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          "es-ES": "Camión volquete articulado resistente para el transporte eficiente de cargas pesadas en construcción y minería.",
          "fr": undefined,
          "fr-FR": "Camion benne articulé durable pour le transport efficace de charges lourdes dans la construction et l&#39;exploitation minière.",
          "it-IT": "Camion ribaltabile articolato durevole per il trasporto efficiente di carichi pesanti in costruzioni e miniere.",
          "nl-NL": "Duurzame knikdumptruck voor efficiënt transport van zware ladingen in bouw en mijnbouw.",
          "pt-PT": "Caminhão articulado basculante durável para transporte eficiente de cargas pesadas em construção e mineração.",
        },
        "key": "u123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 200,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "u123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "U123 QR Gelenkdumper",
          "en": undefined,
          "en-AU": "U123 QR Articulated Dump Truck",
          "en-GB": "U123 QR Articulated Dump Truck",
          "en-NZ": "U123 QR Articulated Dump Truck",
          "en-UK": "U123 QR Articulated Dump Truck",
          "en-US": "U123 QR Articulated Dump Truck",
          "es-ES": "U123 QR Camión volquete articulado",
          "fr": undefined,
          "fr-FR": "U123 QR Camion benne articulé",
          "it-IT": "U123 QR Camion Ribaltabile Articolato",
          "nl-NL": "U123 QR Knikdumptruck",
          "pt-PT": "U123 QR Caminhão Articulado Basculante",
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
          "de-DE": "u123-qr",
          "en": undefined,
          "en-AU": "u123-qr",
          "en-GB": "u123-qr",
          "en-NZ": "u123-qr",
          "en-UK": "u123-qr",
          "en-US": "u123-qr",
          "es-ES": "u123-qr",
          "fr": undefined,
          "fr-FR": "u123-qr",
          "it-IT": "u123-qr",
          "nl-NL": "u123-qr",
          "pt-PT": "u123-qr",
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
                "value": 200,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "u123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 200,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "u123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a u123Qr preset when built for graphql`, () => {
    const u123QrPresetGraphql = u123Qr().buildGraphql<TProductDraft>();
    expect(u123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "articulated-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Gelenkdumper für den effizienten Transport von schweren Lasten in Bau- und Bergbauanwendungen.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile articolato durevole per il trasporto efficiente di carichi pesanti in costruzioni e miniere.",
          },
          {
            "locale": "en-UK",
            "value": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          },
          {
            "locale": "nl-NL",
            "value": "Duurzame knikdumptruck voor efficiënt transport van zware ladingen in bouw en mijnbouw.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne articulé durable pour le transport efficace de charges lourdes dans la construction et l&#39;exploitation minière.",
          },
          {
            "locale": "en-AU",
            "value": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete articulado resistente para el transporte eficiente de cargas pesadas en construcción y minería.",
          },
          {
            "locale": "en-GB",
            "value": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          },
          {
            "locale": "en-NZ",
            "value": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão articulado basculante durável para transporte eficiente de cargas pesadas em construção e mineração.",
          },
          {
            "locale": "en-US",
            "value": "Durable articulated dump truck for efficient transport of heavy loads in construction and mining.",
          },
        ],
        "key": "u123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "200",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "u123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "U123 QR Gelenkdumper",
          },
          {
            "locale": "it-IT",
            "value": "U123 QR Camion Ribaltabile Articolato",
          },
          {
            "locale": "en-UK",
            "value": "U123 QR Articulated Dump Truck",
          },
          {
            "locale": "nl-NL",
            "value": "U123 QR Knikdumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "U123 QR Camion benne articulé",
          },
          {
            "locale": "en-AU",
            "value": "U123 QR Articulated Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "U123 QR Camión volquete articulado",
          },
          {
            "locale": "en-GB",
            "value": "U123 QR Articulated Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "U123 QR Articulated Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "U123 QR Caminhão Articulado Basculante",
          },
          {
            "locale": "en-US",
            "value": "U123 QR Articulated Dump Truck",
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
            "value": "u123-qr",
          },
          {
            "locale": "it-IT",
            "value": "u123-qr",
          },
          {
            "locale": "en-UK",
            "value": "u123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "u123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "u123-qr",
          },
          {
            "locale": "en-AU",
            "value": "u123-qr",
          },
          {
            "locale": "es-ES",
            "value": "u123-qr",
          },
          {
            "locale": "en-GB",
            "value": "u123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "u123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "u123-qr",
          },
          {
            "locale": "en-US",
            "value": "u123-qr",
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
                "value": "200",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "u123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "200",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "u123-qr-2023",
          },
        ],
      }
    `);
  });
});
