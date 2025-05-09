import type { TProductDraft } from '../../../types';
import l890Op from './l-890-op';

describe(`with l890Op preset`, () => {
  it(`should return a l890Op preset`, () => {
    const l890OpPreset = l890Op().build<TProductDraft>();
    expect(l890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "swamp-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Sumpfbagger mit hoher Kapazität und speziellen Funktionen für anspruchsvolle Projekte in Feuchtgebieten.",
          "en": undefined,
          "en-AU": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          "en-GB": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          "en-NZ": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          "en-US": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          "es-ES": "Topadora de pantano de alta capacidad con características especializadas para proyectos desafiantes en áreas húmedas.",
          "fr": undefined,
          "fr-FR": "Bulldozer des marais haute capacité avec des fonctionnalités spécialisées pour des projets difficiles en zones humides.",
          "it-IT": "Bulldozer per paludi ad alta capacità L890 OP con caratteristiche specializzate per progetti impegnativi in terreni umidi.",
          "nl-NL": "L890 OP Hoogcapaciteits moeras bulldozer met gespecialiseerde functies voor uitdagende wetland projecten.",
          "pt-PT": "Trator de esteiras para pântano de alta capacidade L890 OP com características especializadas para projetos desafiadores em terrenos úmidos.",
        },
        "key": "l890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 850,
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
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "l890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "L890 OP Sumpfbagger",
          "en": undefined,
          "en-AU": "L890 OP Swamp Bulldozer",
          "en-GB": "L890 OP Swamp Bulldozer",
          "en-NZ": "L890 OP Swamp Bulldozer",
          "en-US": "L890 OP Swamp Bulldozer",
          "es-ES": "L890 OP Topadora de pantano",
          "fr": undefined,
          "fr-FR": "L890 OP Bulldozer des marais",
          "it-IT": "L890 OP Bulldozer per Paludi",
          "nl-NL": "L890 OP Moeras Bulldozer",
          "pt-PT": "L890 OP Trator de Esteiras para Pântano",
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
          "de-DE": "l890-op",
          "en": undefined,
          "en-AU": "l890-op",
          "en-GB": "l890-op",
          "en-NZ": "l890-op",
          "en-US": "l890-op",
          "es-ES": "l890-op",
          "fr": undefined,
          "fr-FR": "l890-op",
          "it-IT": "l890-op",
          "nl-NL": "l890-op",
          "pt-PT": "l890-op",
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
                "value": 850,
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
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "l890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 850,
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
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "l890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a l890Op preset when built for graphql`, () => {
    const l890OpPresetGraphql = l890Op().buildGraphql<TProductDraft>();
    expect(l890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "swamp-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Sumpfbagger mit hoher Kapazität und speziellen Funktionen für anspruchsvolle Projekte in Feuchtgebieten.",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per paludi ad alta capacità L890 OP con caratteristiche specializzate per progetti impegnativi in terreni umidi.",
          },
          {
            "locale": "nl-NL",
            "value": "L890 OP Hoogcapaciteits moeras bulldozer met gespecialiseerde functies voor uitdagende wetland projecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer des marais haute capacité avec des fonctionnalités spécialisées pour des projets difficiles en zones humides.",
          },
          {
            "locale": "en-AU",
            "value": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora de pantano de alta capacidad con características especializadas para proyectos desafiantes en áreas húmedas.",
          },
          {
            "locale": "en-GB",
            "value": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          },
          {
            "locale": "en-NZ",
            "value": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras para pântano de alta capacidade L890 OP com características especializadas para projetos desafiadores em terrenos úmidos.",
          },
          {
            "locale": "en-US",
            "value": "L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.",
          },
        ],
        "key": "l890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "850",
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
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "l890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "L890 OP Sumpfbagger",
          },
          {
            "locale": "it-IT",
            "value": "L890 OP Bulldozer per Paludi",
          },
          {
            "locale": "nl-NL",
            "value": "L890 OP Moeras Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "L890 OP Bulldozer des marais",
          },
          {
            "locale": "en-AU",
            "value": "L890 OP Swamp Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "L890 OP Topadora de pantano",
          },
          {
            "locale": "en-GB",
            "value": "L890 OP Swamp Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "L890 OP Swamp Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "L890 OP Trator de Esteiras para Pântano",
          },
          {
            "locale": "en-US",
            "value": "L890 OP Swamp Bulldozer",
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
            "value": "l890-op",
          },
          {
            "locale": "it-IT",
            "value": "l890-op",
          },
          {
            "locale": "nl-NL",
            "value": "l890-op",
          },
          {
            "locale": "fr-FR",
            "value": "l890-op",
          },
          {
            "locale": "en-AU",
            "value": "l890-op",
          },
          {
            "locale": "es-ES",
            "value": "l890-op",
          },
          {
            "locale": "en-GB",
            "value": "l890-op",
          },
          {
            "locale": "en-NZ",
            "value": "l890-op",
          },
          {
            "locale": "pt-PT",
            "value": "l890-op",
          },
          {
            "locale": "en-US",
            "value": "l890-op",
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
                "value": "850",
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
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "l890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "850",
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
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "l890-op-2023",
          },
        ],
      }
    `);
  });
});
