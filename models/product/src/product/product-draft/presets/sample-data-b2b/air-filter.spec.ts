import type { TProductDraft } from '../../../types';
import airFilter from './air-filter';

describe(`with airFilter preset`, () => {
  it(`should return a airFilter preset`, () => {
    const airFilterPreset = airFilter().build<TProductDraft>();
    expect(airFilterPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Filtert die in den Motor eindringende Luft, um Motorverschleiß zu verhindern.",
          "en": undefined,
          "en-US": "Filters air entering the engine to prevent engine wear.",
          "es-ES": "Filtra el aire que entra en el motor para prevenir el desgaste del motor.",
          "fr": undefined,
          "fr-FR": "Filtre l&#39;air entrant dans le moteur pour prévenir l&#39;usure du moteur.",
          "it-IT": "Filtra l&#39;aria che entra nel motore per prevenire l&#39;usura del motore.",
          "nl-NL": "Filtert de lucht die de motor binnenkomt om motorslijtage te voorkomen.",
          "pt-PT": "Filtra o ar que entra no motor para prevenir o desgaste do motor.",
        },
        "key": "air-filter",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/air-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "air-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Luftfilter",
          "en": undefined,
          "en-US": "Air Filter",
          "es-ES": "Filtro de aire",
          "fr": undefined,
          "fr-FR": "Filtre à air",
          "it-IT": "Filtro aria",
          "nl-NL": "Luchtfilter",
          "pt-PT": "Filtro de ar",
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
          "de-DE": "air-filter",
          "en": undefined,
          "en-US": "air-filter",
          "es-ES": "air-filter",
          "fr": undefined,
          "fr-FR": "air-filter",
          "it-IT": "air-filter",
          "nl-NL": "air-filter",
          "pt-PT": "air-filter",
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

  it(`should return a airFilter preset when built for graphql`, () => {
    const airFilterPresetGraphql = airFilter().buildGraphql<TProductDraft>();
    expect(airFilterPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Filtert die in den Motor eindringende Luft, um Motorverschleiß zu verhindern.",
          },
          {
            "locale": "it-IT",
            "value": "Filtra l&#39;aria che entra nel motore per prevenire l&#39;usura del motore.",
          },
          {
            "locale": "nl-NL",
            "value": "Filtert de lucht die de motor binnenkomt om motorslijtage te voorkomen.",
          },
          {
            "locale": "fr-FR",
            "value": "Filtre l&#39;air entrant dans le moteur pour prévenir l&#39;usure du moteur.",
          },
          {
            "locale": "es-ES",
            "value": "Filtra el aire que entra en el motor para prevenir el desgaste del motor.",
          },
          {
            "locale": "pt-PT",
            "value": "Filtra o ar que entra no motor para prevenir o desgaste do motor.",
          },
          {
            "locale": "en-US",
            "value": "Filters air entering the engine to prevent engine wear.",
          },
        ],
        "key": "air-filter",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/air-filter.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "air-filter",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Luftfilter",
          },
          {
            "locale": "it-IT",
            "value": "Filtro aria",
          },
          {
            "locale": "nl-NL",
            "value": "Luchtfilter",
          },
          {
            "locale": "fr-FR",
            "value": "Filtre à air",
          },
          {
            "locale": "es-ES",
            "value": "Filtro de aire",
          },
          {
            "locale": "pt-PT",
            "value": "Filtro de ar",
          },
          {
            "locale": "en-US",
            "value": "Air Filter",
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
            "value": "air-filter",
          },
          {
            "locale": "it-IT",
            "value": "air-filter",
          },
          {
            "locale": "nl-NL",
            "value": "air-filter",
          },
          {
            "locale": "fr-FR",
            "value": "air-filter",
          },
          {
            "locale": "es-ES",
            "value": "air-filter",
          },
          {
            "locale": "pt-PT",
            "value": "air-filter",
          },
          {
            "locale": "en-US",
            "value": "air-filter",
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
