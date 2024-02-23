import type { TProductDraft } from '../../../types';
import brakePadSet from './brake-pad-set';

describe(`with brakePadSet preset`, () => {
  it(`should return a brakePadSet preset`, () => {
    const brakePadSetPreset = brakePadSet().build<TProductDraft>();
    expect(brakePadSetPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Stellt die Reibung bereit, um das Fahrzeug anzuhalten.",
          "en": undefined,
          "en-US": "Provides the friction to stop the vehicle.",
          "es-ES": "Proporciona la fricción para detener el vehículo.",
          "fr": undefined,
          "fr-FR": "Fournit la friction nécessaire pour arrêter le véhicule.",
          "it-IT": "Fornisce l&#39;attrito per fermare il veicolo.",
          "nl-NL": "Zorgt voor de wrijving om het voertuig te stoppen.",
          "pt-PT": "Fornece a fricção para parar o veículo.",
        },
        "key": "brake-pad-set",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/brake-pad-set.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "brake-pad-set",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bremsbelagsatz",
          "en": undefined,
          "en-US": "Brake Pad Set",
          "es-ES": "Juego de pastillas de freno",
          "fr": undefined,
          "fr-FR": "Jeu de plaquettes de frein",
          "it-IT": "Set di pastiglie freno",
          "nl-NL": "Remblokkenset",
          "pt-PT": "Conjunto de pastilhas de freio",
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
          "de-DE": "brake-pad-set",
          "en": undefined,
          "en-US": "brake-pad-set",
          "es-ES": "brake-pad-set",
          "fr": undefined,
          "fr-FR": "brake-pad-set",
          "it-IT": "brake-pad-set",
          "nl-NL": "brake-pad-set",
          "pt-PT": "brake-pad-set",
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

  it(`should return a brakePadSet preset when built for graphql`, () => {
    const brakePadSetPresetGraphql =
      brakePadSet().buildGraphql<TProductDraft>();
    expect(brakePadSetPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Stellt die Reibung bereit, um das Fahrzeug anzuhalten.",
          },
          {
            "locale": "it-IT",
            "value": "Fornisce l&#39;attrito per fermare il veicolo.",
          },
          {
            "locale": "nl-NL",
            "value": "Zorgt voor de wrijving om het voertuig te stoppen.",
          },
          {
            "locale": "fr-FR",
            "value": "Fournit la friction nécessaire pour arrêter le véhicule.",
          },
          {
            "locale": "es-ES",
            "value": "Proporciona la fricción para detener el vehículo.",
          },
          {
            "locale": "pt-PT",
            "value": "Fornece a fricção para parar o veículo.",
          },
          {
            "locale": "en-US",
            "value": "Provides the friction to stop the vehicle.",
          },
        ],
        "key": "brake-pad-set",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/brake-pad-set.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "brake-pad-set",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bremsbelagsatz",
          },
          {
            "locale": "it-IT",
            "value": "Set di pastiglie freno",
          },
          {
            "locale": "nl-NL",
            "value": "Remblokkenset",
          },
          {
            "locale": "fr-FR",
            "value": "Jeu de plaquettes de frein",
          },
          {
            "locale": "es-ES",
            "value": "Juego de pastillas de freno",
          },
          {
            "locale": "pt-PT",
            "value": "Conjunto de pastilhas de freio",
          },
          {
            "locale": "en-US",
            "value": "Brake Pad Set",
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
            "value": "brake-pad-set",
          },
          {
            "locale": "it-IT",
            "value": "brake-pad-set",
          },
          {
            "locale": "nl-NL",
            "value": "brake-pad-set",
          },
          {
            "locale": "fr-FR",
            "value": "brake-pad-set",
          },
          {
            "locale": "es-ES",
            "value": "brake-pad-set",
          },
          {
            "locale": "pt-PT",
            "value": "brake-pad-set",
          },
          {
            "locale": "en-US",
            "value": "brake-pad-set",
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
