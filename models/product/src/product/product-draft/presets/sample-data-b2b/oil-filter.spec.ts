import type { TProductDraft } from '../../../types';
import oilFilter from './oil-filter';

describe(`with oilFilter preset`, () => {
  it(`should return a oilFilter preset`, () => {
    const oilFilterPreset = oilFilter().build<TProductDraft>();
    expect(oilFilterPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Entfernt Verunreinigungen aus dem Motoröl.",
          "en": undefined,
          "en-US": "Removes contaminants from engine oil.",
          "es-ES": "Elimina los contaminantes del aceite del motor.",
          "fr": undefined,
          "fr-FR": "Élimine les contaminants de l&#39;huile moteur.",
          "it-IT": "Rimuove le impurità dall&#39;olio motore.",
          "nl-NL": "Verwijdert verontreinigingen uit de motorolie.",
          "pt-PT": "Remove contaminantes do óleo do motor.",
        },
        "key": "oil-filter",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oil-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "oil-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Ölfilter",
          "en": undefined,
          "en-US": "Oil Filter",
          "es-ES": "Filtro de aceite",
          "fr": undefined,
          "fr-FR": "Filtre à huile",
          "it-IT": "Filtro dell&#39;olio",
          "nl-NL": "Oliefilter",
          "pt-PT": "Filtro de óleo",
        },
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "oil-filter",
          "en": undefined,
          "en-US": "oil-filter",
          "es-ES": "oil-filter",
          "fr": undefined,
          "fr-FR": "oil-filter",
          "it-IT": "oil-filter",
          "nl-NL": "oil-filter",
          "pt-PT": "oil-filter",
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a oilFilter preset when built for graphql`, () => {
    const oilFilterPresetGraphql = oilFilter().buildGraphql<TProductDraft>();
    expect(oilFilterPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Entfernt Verunreinigungen aus dem Motoröl.",
          },
          {
            "locale": "it-IT",
            "value": "Rimuove le impurità dall&#39;olio motore.",
          },
          {
            "locale": "nl-NL",
            "value": "Verwijdert verontreinigingen uit de motorolie.",
          },
          {
            "locale": "fr-FR",
            "value": "Élimine les contaminants de l&#39;huile moteur.",
          },
          {
            "locale": "es-ES",
            "value": "Elimina los contaminantes del aceite del motor.",
          },
          {
            "locale": "pt-PT",
            "value": "Remove contaminantes do óleo do motor.",
          },
          {
            "locale": "en-US",
            "value": "Removes contaminants from engine oil.",
          },
        ],
        "key": "oil-filter",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oil-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "oil-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Ölfilter",
          },
          {
            "locale": "it-IT",
            "value": "Filtro dell&#39;olio",
          },
          {
            "locale": "nl-NL",
            "value": "Oliefilter",
          },
          {
            "locale": "fr-FR",
            "value": "Filtre à huile",
          },
          {
            "locale": "es-ES",
            "value": "Filtro de aceite",
          },
          {
            "locale": "pt-PT",
            "value": "Filtro de óleo",
          },
          {
            "locale": "en-US",
            "value": "Oil Filter",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "oil-filter",
          },
          {
            "locale": "it-IT",
            "value": "oil-filter",
          },
          {
            "locale": "nl-NL",
            "value": "oil-filter",
          },
          {
            "locale": "fr-FR",
            "value": "oil-filter",
          },
          {
            "locale": "es-ES",
            "value": "oil-filter",
          },
          {
            "locale": "pt-PT",
            "value": "oil-filter",
          },
          {
            "locale": "en-US",
            "value": "oil-filter",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
