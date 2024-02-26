import type { TProductDraft } from '../../../types';
import x234Wx from './x-234-wx';

describe(`with x234Wx preset`, () => {
  it(`should return a x234Wx preset`, () => {
    const x234WxPreset = x234Wx().build<TProductDraft>();
    expect(x234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Geländekipplaster für den effizienten Transport von Material in anspruchsvollem Gelände.",
          "en": undefined,
          "en-AU": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          "en-GB": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          "en-NZ": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          "en-UK": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          "en-US": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          "es-ES": "Camión volquete fuera de carretera versátil para el transporte eficiente de materiales en terrenos desafiantes.",
          "fr": undefined,
          "fr-FR": "Camion benne tout-terrain polyvalent pour le transport efficace de matériaux dans des terrains difficiles.",
          "it-IT": "Camion ribaltabile fuoristrada versatile per il trasporto efficiente di materiali in terreni difficili.",
          "nl-NL": "Veelzijdige off-highway dumptruck voor efficiënt materiaaltransport in uitdagende terreinen.",
          "pt-PT": "Caminhão basculante fora-de-estrada versátil para transporte eficiente de materiais em terrenos desafiadores.",
        },
        "key": "x234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 400,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "x234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "X234 WX Geländekipplaster",
          "en": undefined,
          "en-AU": "X234 WX Off-Highway Dump Truck",
          "en-GB": "X234 WX Off-Highway Dump Truck",
          "en-NZ": "X234 WX Off-Highway Dump Truck",
          "en-UK": "X234 WX Off-Highway Dump Truck",
          "en-US": "X234 WX Off-Highway Dump Truck",
          "es-ES": "X234 WX Camión volquete fuera de carretera",
          "fr": undefined,
          "fr-FR": "X234 WX Camion benne tout-terrain",
          "it-IT": "X234 WX Camion Ribaltabile Fuoristrada",
          "nl-NL": "X234 WX Off-Highway Dumptruck",
          "pt-PT": "X234 WX Caminhão Basculante Fora-de-Estrada",
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
          "de-DE": "x234-wx",
          "en": undefined,
          "en-AU": "x234-wx",
          "en-GB": "x234-wx",
          "en-NZ": "x234-wx",
          "en-UK": "x234-wx",
          "en-US": "x234-wx",
          "es-ES": "x234-wx",
          "fr": undefined,
          "fr-FR": "x234-wx",
          "it-IT": "x234-wx",
          "nl-NL": "x234-wx",
          "pt-PT": "x234-wx",
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
                "value": 400,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 400,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a x234Wx preset when built for graphql`, () => {
    const x234WxPresetGraphql = x234Wx().buildGraphql<TProductDraft>();
    expect(x234WxPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Vielseitiger Geländekipplaster für den effizienten Transport von Material in anspruchsvollem Gelände.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile fuoristrada versatile per il trasporto efficiente di materiali in terreni difficili.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige off-highway dumptruck voor efficiënt materiaaltransport in uitdagende terreinen.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne tout-terrain polyvalent pour le transport efficace de matériaux dans des terrains difficiles.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete fuera de carretera versátil para el transporte eficiente de materiales en terrenos desafiantes.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão basculante fora-de-estrada versátil para transporte eficiente de materiais em terrenos desafiadores.",
          },
          {
            "locale": "en-US",
            "value": "Versatile off-highway dump truck for efficient material transport in challenging terrains.",
          },
        ],
        "key": "x234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "400",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "x234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "X234 WX Geländekipplaster",
          },
          {
            "locale": "it-IT",
            "value": "X234 WX Camion Ribaltabile Fuoristrada",
          },
          {
            "locale": "en-UK",
            "value": "X234 WX Off-Highway Dump Truck",
          },
          {
            "locale": "nl-NL",
            "value": "X234 WX Off-Highway Dumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "X234 WX Camion benne tout-terrain",
          },
          {
            "locale": "en-AU",
            "value": "X234 WX Off-Highway Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "X234 WX Camión volquete fuera de carretera",
          },
          {
            "locale": "en-GB",
            "value": "X234 WX Off-Highway Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "X234 WX Off-Highway Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "X234 WX Caminhão Basculante Fora-de-Estrada",
          },
          {
            "locale": "en-US",
            "value": "X234 WX Off-Highway Dump Truck",
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
            "value": "x234-wx",
          },
          {
            "locale": "it-IT",
            "value": "x234-wx",
          },
          {
            "locale": "en-UK",
            "value": "x234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "x234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "x234-wx",
          },
          {
            "locale": "en-AU",
            "value": "x234-wx",
          },
          {
            "locale": "es-ES",
            "value": "x234-wx",
          },
          {
            "locale": "en-GB",
            "value": "x234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "x234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "x234-wx",
          },
          {
            "locale": "en-US",
            "value": "x234-wx",
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
                "value": "400",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "400",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x234-wx-2023",
          },
        ],
      }
    `);
  });
});
