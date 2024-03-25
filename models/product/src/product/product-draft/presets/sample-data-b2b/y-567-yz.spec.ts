import type { TProductDraft } from '../../../types';
import y567Yz from './y-567-yz';

describe(`with y567Yz preset`, () => {
  it(`should return a y567Yz preset`, () => {
    const y567YzPreset = y567Yz().build<TProductDraft>();
    expect(y567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "off-highway-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Geländekipplaster mit erweiterten Funktionen für den zuverlässigen Transport von Material.",
          "en": undefined,
          "en-AU": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          "en-GB": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          "en-NZ": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          "en-US": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          "es-ES": "Camión volquete fuera de carretera resistente con características mejoradas para el transporte confiable de materiales.",
          "fr": undefined,
          "fr-FR": "Camion benne tout-terrain robuste avec des fonctionnalités améliorées pour un transport fiable des matériaux.",
          "it-IT": "Camion ribaltabile fuoristrada per impieghi pesanti con caratteristiche potenziate per un trasporto affidabile dei materiali.",
          "nl-NL": "Zware off-highway dumptruck met verbeterde functies voor betrouwbaar materiaaltransport.",
          "pt-PT": "Caminhão basculante fora-de-estrada de serviço pesado com recursos aprimorados para transporte confiável de materiais.",
        },
        "key": "y567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 450,
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
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "y567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Y567 YZ Geländekipplaster",
          "en": undefined,
          "en-AU": "Y567 YZ Off-Highway Dump Truck",
          "en-GB": "Y567 YZ Off-Highway Dump Truck",
          "en-NZ": "Y567 YZ Off-Highway Dump Truck",
          "en-US": "Y567 YZ Off-Highway Dump Truck",
          "es-ES": "Y567 YZ Camión volquete fuera de carretera",
          "fr": undefined,
          "fr-FR": "Y567 YZ Camion benne tout-terrain",
          "it-IT": "Y567 YZ Camion Ribaltabile Fuoristrada",
          "nl-NL": "Y567 YZ Off-Highway Dumptruck",
          "pt-PT": "Y567 YZ Caminhão Basculante Fora-de-Estrada",
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
          "de-DE": "y567-yz",
          "en": undefined,
          "en-AU": "y567-yz",
          "en-GB": "y567-yz",
          "en-NZ": "y567-yz",
          "en-US": "y567-yz",
          "es-ES": "y567-yz",
          "fr": undefined,
          "fr-FR": "y567-yz",
          "it-IT": "y567-yz",
          "nl-NL": "y567-yz",
          "pt-PT": "y567-yz",
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
                "value": 450,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "y567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 450,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "y567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a y567Yz preset when built for graphql`, () => {
    const y567YzPresetGraphql = y567Yz().buildGraphql<TProductDraft>();
    expect(y567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "off-highway-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Geländekipplaster mit erweiterten Funktionen für den zuverlässigen Transport von Material.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile fuoristrada per impieghi pesanti con caratteristiche potenziate per un trasporto affidabile dei materiali.",
          },
          {
            "locale": "nl-NL",
            "value": "Zware off-highway dumptruck met verbeterde functies voor betrouwbaar materiaaltransport.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne tout-terrain robuste avec des fonctionnalités améliorées pour un transport fiable des matériaux.",
          },
          {
            "locale": "en-AU",
            "value": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete fuera de carretera resistente con características mejoradas para el transporte confiable de materiales.",
          },
          {
            "locale": "en-GB",
            "value": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          },
          {
            "locale": "en-NZ",
            "value": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão basculante fora-de-estrada de serviço pesado com recursos aprimorados para transporte confiável de materiais.",
          },
          {
            "locale": "en-US",
            "value": "Heavy-duty off-highway dump truck with enhanced features for reliable material transport.",
          },
        ],
        "key": "y567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "450",
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
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "y567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Y567 YZ Geländekipplaster",
          },
          {
            "locale": "it-IT",
            "value": "Y567 YZ Camion Ribaltabile Fuoristrada",
          },
          {
            "locale": "nl-NL",
            "value": "Y567 YZ Off-Highway Dumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "Y567 YZ Camion benne tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "Y567 YZ Off-Highway Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "Y567 YZ Camión volquete fuera de carretera",
          },
          {
            "locale": "en-GB",
            "value": "Y567 YZ Off-Highway Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "Y567 YZ Off-Highway Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "Y567 YZ Caminhão Basculante Fora-de-Estrada",
          },
          {
            "locale": "en-US",
            "value": "Y567 YZ Off-Highway Dump Truck",
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
            "value": "y567-yz",
          },
          {
            "locale": "it-IT",
            "value": "y567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "y567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "y567-yz",
          },
          {
            "locale": "en-AU",
            "value": "y567-yz",
          },
          {
            "locale": "es-ES",
            "value": "y567-yz",
          },
          {
            "locale": "en-GB",
            "value": "y567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "y567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "y567-yz",
          },
          {
            "locale": "en-US",
            "value": "y567-yz",
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
                "value": "450",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "y567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "450",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "y567-yz-2023",
          },
        ],
      }
    `);
  });
});
