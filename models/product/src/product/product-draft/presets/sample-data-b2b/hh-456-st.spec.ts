import type { TProductDraft } from '../../../types';
import hh456St from './hh-456-st';

describe(`with hh456St preset`, () => {
  it(`should return a hh456St preset`, () => {
    const hh456StPreset = hh456St().build<TProductDraft>();
    expect(hh456StPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Pneumatikwalze für effektive Verdichtung verschiedener Oberflächen.",
          "en": undefined,
          "en-AU": "Versatile pneumatic roller for effective compaction of various surfaces.",
          "en-GB": "Versatile pneumatic roller for effective compaction of various surfaces.",
          "en-NZ": "Versatile pneumatic roller for effective compaction of various surfaces.",
          "en-UK": "Versatile pneumatic roller for effective compaction of various surfaces.",
          "en-US": "Versatile pneumatic roller for effective compaction of various surfaces.",
          "es-ES": "Rodillo neumático versátil para la compactación efectiva de diversas superficies.",
          "fr": undefined,
          "fr-FR": "Rouleau pneumatique polyvalent pour la compactage efficace de diverses surfaces.",
          "it-IT": "Rullo pneumatico versatile per la compattazione efficace di varie superfici.",
          "nl-NL": "Veelzijdige pneumatische wals voor effectieve verdichting van diverse oppervlakken.",
          "pt-PT": "Rolo pneumático versátil para compactação eficaz de várias superfícies.",
        },
        "key": "hh456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hh456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "HH456 ST Pneumatische Walze",
          "en": undefined,
          "en-AU": "HH456 ST Pneumatic Roller",
          "en-GB": "HH456 ST Pneumatic Roller",
          "en-NZ": "HH456 ST Pneumatic Roller",
          "en-UK": "HH456 ST Pneumatic Roller",
          "en-US": "HH456 ST Pneumatic Roller",
          "es-ES": "HH456 ST Rodillo neumático",
          "fr": undefined,
          "fr-FR": "HH456 ST Rouleau pneumatique",
          "it-IT": "HH456 ST Rullo Pneumatico",
          "nl-NL": "HH456 ST Pneumatische Wals",
          "pt-PT": "HH456 ST Rolo Pneumático",
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
          "de-DE": "hh456-st",
          "en": undefined,
          "en-AU": "hh456-st",
          "en-GB": "hh456-st",
          "en-NZ": "hh456-st",
          "en-UK": "hh456-st",
          "en-US": "hh456-st",
          "es-ES": "hh456-st",
          "fr": undefined,
          "fr-FR": "hh456-st",
          "it-IT": "hh456-st",
          "nl-NL": "hh456-st",
          "pt-PT": "hh456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hh456-st-2019",
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
            "images": [],
            "key": undefined,
            "prices": undefined,
            "sku": "hh456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a hh456St preset when built for graphql`, () => {
    const hh456StPresetGraphql = hh456St().buildGraphql<TProductDraft>();
    expect(hh456StPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Vielseitiger Pneumatikwalze für effektive Verdichtung verschiedener Oberflächen.",
          },
          {
            "locale": "it-IT",
            "value": "Rullo pneumatico versatile per la compattazione efficace di varie superfici.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile pneumatic roller for effective compaction of various surfaces.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige pneumatische wals voor effectieve verdichting van diverse oppervlakken.",
          },
          {
            "locale": "fr-FR",
            "value": "Rouleau pneumatique polyvalent pour la compactage efficace de diverses surfaces.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile pneumatic roller for effective compaction of various surfaces.",
          },
          {
            "locale": "es-ES",
            "value": "Rodillo neumático versátil para la compactación efectiva de diversas superficies.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile pneumatic roller for effective compaction of various surfaces.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile pneumatic roller for effective compaction of various surfaces.",
          },
          {
            "locale": "pt-PT",
            "value": "Rolo pneumático versátil para compactação eficaz de várias superfícies.",
          },
          {
            "locale": "en-US",
            "value": "Versatile pneumatic roller for effective compaction of various surfaces.",
          },
        ],
        "key": "hh456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hh456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "HH456 ST Pneumatische Walze",
          },
          {
            "locale": "it-IT",
            "value": "HH456 ST Rullo Pneumatico",
          },
          {
            "locale": "en-UK",
            "value": "HH456 ST Pneumatic Roller",
          },
          {
            "locale": "nl-NL",
            "value": "HH456 ST Pneumatische Wals",
          },
          {
            "locale": "fr-FR",
            "value": "HH456 ST Rouleau pneumatique",
          },
          {
            "locale": "en-AU",
            "value": "HH456 ST Pneumatic Roller",
          },
          {
            "locale": "es-ES",
            "value": "HH456 ST Rodillo neumático",
          },
          {
            "locale": "en-GB",
            "value": "HH456 ST Pneumatic Roller",
          },
          {
            "locale": "en-NZ",
            "value": "HH456 ST Pneumatic Roller",
          },
          {
            "locale": "pt-PT",
            "value": "HH456 ST Rolo Pneumático",
          },
          {
            "locale": "en-US",
            "value": "HH456 ST Pneumatic Roller",
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
            "value": "hh456-st",
          },
          {
            "locale": "it-IT",
            "value": "hh456-st",
          },
          {
            "locale": "en-UK",
            "value": "hh456-st",
          },
          {
            "locale": "nl-NL",
            "value": "hh456-st",
          },
          {
            "locale": "fr-FR",
            "value": "hh456-st",
          },
          {
            "locale": "en-AU",
            "value": "hh456-st",
          },
          {
            "locale": "es-ES",
            "value": "hh456-st",
          },
          {
            "locale": "en-GB",
            "value": "hh456-st",
          },
          {
            "locale": "en-NZ",
            "value": "hh456-st",
          },
          {
            "locale": "pt-PT",
            "value": "hh456-st",
          },
          {
            "locale": "en-US",
            "value": "hh456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hh456-st-2019",
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
                "value": "true",
              },
              {
                "name": "mobility",
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [],
            "key": undefined,
            "prices": undefined,
            "sku": "hh456-st-2023",
          },
        ],
      }
    `);
  });
});
