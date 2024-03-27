import type { TProductDraft } from '../../../types';
import fuelFilter from './fuel-filter';

describe(`with fuelFilter preset`, () => {
  it(`should return a fuelFilter preset`, () => {
    const fuelFilterPreset = fuelFilter().build<TProductDraft>();
    expect(fuelFilterPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Entfernt Schmutz und Verunreinigungen aus dem Kraftstoff.",
          "en": undefined,
          "en-AU": "Removes debris and contaminants from fuel.",
          "en-GB": "Removes debris and contaminants from fuel.",
          "en-NZ": "Removes debris and contaminants from fuel.",
          "en-US": "Removes debris and contaminants from fuel.",
          "es-ES": "Elimina residuos y contaminantes del combustible.",
          "fr": undefined,
          "fr-FR": "Élimine les débris et les contaminants du carburant.",
          "it-IT": "Rimuove detriti e contaminanti dal carburante.",
          "nl-NL": "Verwijdert vuil en verontreinigingen uit de brandstof.",
          "pt-PT": "Remove detritos e contaminantes do combustível.",
        },
        "key": "fuel-filter",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fuel-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "fuel-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kraftstofffilter",
          "en": undefined,
          "en-US": "Fuel NZlter",
          "es-ES": "Filtro de combustible",
          "fr": undefined,
          "fr-FR": "Filtre à carburant",
          "it-IT": "Filtro del carburante",
          "nl-NL": "Brandstoffilter",
          "pt-PT": "Filtro de combustível",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "fuel-filter",
          "en": undefined,
          "en-AU": "fuel-filter",
          "en-GB": "fuel-filter",
          "en-NZ": "fuel-filter",
          "en-US": "fuel-filter",
          "es-ES": "fuel-filter",
          "fr": undefined,
          "fr-FR": "fuel-filter",
          "it-IT": "fuel-filter",
          "nl-NL": "fuel-filter",
          "pt-PT": "fuel-filter",
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

  it(`should return a fuelFilter preset when built for graphql`, () => {
    const fuelFilterPresetGraphql = fuelFilter().buildGraphql<TProductDraft>();
    expect(fuelFilterPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Entfernt Schmutz und Verunreinigungen aus dem Kraftstoff.",
          },
          {
            "locale": "it-IT",
            "value": "Rimuove detriti e contaminanti dal carburante.",
          },
          {
            "locale": "nl-NL",
            "value": "Verwijdert vuil en verontreinigingen uit de brandstof.",
          },
          {
            "locale": "fr-FR",
            "value": "Élimine les débris et les contaminants du carburant.",
          },
          {
            "locale": "es-ES",
            "value": "Elimina residuos y contaminantes del combustible.",
          },
          {
            "locale": "pt-PT",
            "value": "Remove detritos e contaminantes do combustível.",
          },
          {
            "locale": "en-US",
            "value": "Removes debris and contaminants from fuel.",
          },
          {
            "locale": "en-GB",
            "value": "Removes debris and contaminants from fuel.",
          },
          {
            "locale": "en-AU",
            "value": "Removes debris and contaminants from fuel.",
          },
          {
            "locale": "en-NZ",
            "value": "Removes debris and contaminants from fuel.",
          },
        ],
        "key": "fuel-filter",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fuel-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "fuel-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Kraftstofffilter",
          },
          {
            "locale": "it-IT",
            "value": "Filtro del carburante",
          },
          {
            "locale": "nl-NL",
            "value": "Brandstoffilter",
          },
          {
            "locale": "fr-FR",
            "value": "Filtre à carburant",
          },
          {
            "locale": "es-ES",
            "value": "Filtro de combustible",
          },
          {
            "locale": "pt-PT",
            "value": "Filtro de combustível",
          },
          {
            "locale": "en-US",
            "value": "Fuel NZlter",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "fuel-filter",
          },
          {
            "locale": "it-IT",
            "value": "fuel-filter",
          },
          {
            "locale": "nl-NL",
            "value": "fuel-filter",
          },
          {
            "locale": "fr-FR",
            "value": "fuel-filter",
          },
          {
            "locale": "es-ES",
            "value": "fuel-filter",
          },
          {
            "locale": "pt-PT",
            "value": "fuel-filter",
          },
          {
            "locale": "en-US",
            "value": "fuel-filter",
          },
          {
            "locale": "en-GB",
            "value": "fuel-filter",
          },
          {
            "locale": "en-AU",
            "value": "fuel-filter",
          },
          {
            "locale": "en-NZ",
            "value": "fuel-filter",
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
