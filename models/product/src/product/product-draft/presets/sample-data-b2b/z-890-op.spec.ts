import type { TProductDraft } from '../../../types';
import z890Op from './z-890-op';

describe(`with z890Op preset`, () => {
  it(`should return a z890Op preset`, () => {
    const z890OpPreset = z890Op().build<TProductDraft>();
    expect(z890OpPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Geländekipplaster mit hoher Kapazität und speziellen Funktionen für anspruchsvollen Transport von Material.",
          "en": undefined,
          "en-AU": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          "en-GB": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          "en-NZ": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          "en-US": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          "es-ES": "Camión volquete fuera de carretera de alta capacidad con características especializadas para el transporte exigente de materiales.",
          "fr": undefined,
          "fr-FR": "Camion benne tout-terrain haute capacité avec des fonctionnalités spécialisées pour un transport exigeant des matériaux.",
          "it-IT": "Camion ribaltabile fuoristrada ad alta capacità con caratteristiche specializzate per il trasporto esigente di materiali.",
          "nl-NL": "Hoogcapaciteits off-highway dumptruck met gespecialiseerde functies voor veeleisend materiaaltransport.",
          "pt-PT": "Caminhão basculante fora-de-estrada de alta capacidade com recursos especializados para transporte exigente de materiais.",
        },
        "key": "z890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 500,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "z890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Z890 OP Geländekipplaster",
          "en": undefined,
          "en-AU": "Z890 OP Off-Highway Dump Truck",
          "en-GB": "Z890 OP Off-Highway Dump Truck",
          "en-NZ": "Z890 OP Off-Highway Dump Truck",
          "en-US": "Z890 OP Off-Highway Dump Truck",
          "es-ES": "Z890 OP Camión volquete fuera de carretera",
          "fr": undefined,
          "fr-FR": "Z890 OP Camion benne tout-terrain",
          "it-IT": "Z890 OP Camion Ribaltabile Fuoristrada",
          "nl-NL": "Z890 OP Off-Highway Dumptruck",
          "pt-PT": "Z890 OP Caminhão Basculante Fora-de-Estrada",
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
          "de-DE": "z890-op",
          "en": undefined,
          "en-AU": "z890-op",
          "en-GB": "z890-op",
          "en-NZ": "z890-op",
          "en-US": "z890-op",
          "es-ES": "z890-op",
          "fr": undefined,
          "fr-FR": "z890-op",
          "it-IT": "z890-op",
          "nl-NL": "z890-op",
          "pt-PT": "z890-op",
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
                "value": 500,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "z890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 500,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "z890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a z890Op preset when built for graphql`, () => {
    const z890OpPresetGraphql = z890Op().buildGraphql<TProductDraft>();
    expect(z890OpPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Geländekipplaster mit hoher Kapazität und speziellen Funktionen für anspruchsvollen Transport von Material.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile fuoristrada ad alta capacità con caratteristiche specializzate per il trasporto esigente di materiali.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits off-highway dumptruck met gespecialiseerde functies voor veeleisend materiaaltransport.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne tout-terrain haute capacité avec des fonctionnalités spécialisées pour un transport exigeant des matériaux.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete fuera de carretera de alta capacidad con características especializadas para el transporte exigente de materiales.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão basculante fora-de-estrada de alta capacidade com recursos especializados para transporte exigente de materiais.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity off-highway dump truck with specialized features for demanding material transport.",
          },
        ],
        "key": "z890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "500",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "z890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Z890 OP Geländekipplaster",
          },
          {
            "locale": "it-IT",
            "value": "Z890 OP Camion Ribaltabile Fuoristrada",
          },
          {
            "locale": "nl-NL",
            "value": "Z890 OP Off-Highway Dumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "Z890 OP Camion benne tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "Z890 OP Off-Highway Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "Z890 OP Camión volquete fuera de carretera",
          },
          {
            "locale": "en-GB",
            "value": "Z890 OP Off-Highway Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "Z890 OP Off-Highway Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "Z890 OP Caminhão Basculante Fora-de-Estrada",
          },
          {
            "locale": "en-US",
            "value": "Z890 OP Off-Highway Dump Truck",
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
            "value": "z890-op",
          },
          {
            "locale": "it-IT",
            "value": "z890-op",
          },
          {
            "locale": "nl-NL",
            "value": "z890-op",
          },
          {
            "locale": "fr-FR",
            "value": "z890-op",
          },
          {
            "locale": "en-AU",
            "value": "z890-op",
          },
          {
            "locale": "es-ES",
            "value": "z890-op",
          },
          {
            "locale": "en-GB",
            "value": "z890-op",
          },
          {
            "locale": "en-NZ",
            "value": "z890-op",
          },
          {
            "locale": "pt-PT",
            "value": "z890-op",
          },
          {
            "locale": "en-US",
            "value": "z890-op",
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
                "value": "500",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "z890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "500",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "z890-op-2023",
          },
        ],
      }
    `);
  });
});
