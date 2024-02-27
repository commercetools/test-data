import type { TProductDraft } from '../../../types';
import pistonRingSet from './piston-ring-set';

describe(`with pistonRingSet preset`, () => {
  it(`should return a pistonRingSet preset`, () => {
    const pistonRingSetPreset = pistonRingSet().build<TProductDraft>();
    expect(pistonRingSetPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dichtet den Verbrennungsraum ab und reguliert das Öl.",
          "en": undefined,
          "en-US": "Seals the combustion chamber and regulates oil.",
          "es-ES": "Sella la cámara de combustión y regula el aceite.",
          "fr": undefined,
          "fr-FR": "Scelle la chambre de combustion et régule l&#39;huile.",
          "it-IT": "Sigilla la camera di combustione e regola l&#39;olio.",
          "nl-NL": "Dicht de verbrandingskamer af en reguleert de olie.",
          "pt-PT": "Veda a câmara de combustão e regula o óleo.",
        },
        "key": "piston-ring-set",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/piston-ring-set.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "piston-ring-set",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kolbenringsatz",
          "en": undefined,
          "en-US": "Piston Ring Set",
          "es-ES": "Juego de anillos de pistón",
          "fr": undefined,
          "fr-FR": "Jeu de segments de piston",
          "it-IT": "Set di anelli del pistone",
          "nl-NL": "Zuigerverenset",
          "pt-PT": "Conjunto de anéis de pistão",
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
          "de-DE": "piston-ring-set",
          "en": undefined,
          "en-US": "piston-ring-set",
          "es-ES": "piston-ring-set",
          "fr": undefined,
          "fr-FR": "piston-ring-set",
          "it-IT": "piston-ring-set",
          "nl-NL": "piston-ring-set",
          "pt-PT": "piston-ring-set",
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

  it(`should return a pistonRingSet preset when built for graphql`, () => {
    const pistonRingSetPresetGraphql =
      pistonRingSet().buildGraphql<TProductDraft>();
    expect(pistonRingSetPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Dichtet den Verbrennungsraum ab und reguliert das Öl.",
          },
          {
            "locale": "it-IT",
            "value": "Sigilla la camera di combustione e regola l&#39;olio.",
          },
          {
            "locale": "nl-NL",
            "value": "Dicht de verbrandingskamer af en reguleert de olie.",
          },
          {
            "locale": "fr-FR",
            "value": "Scelle la chambre de combustion et régule l&#39;huile.",
          },
          {
            "locale": "es-ES",
            "value": "Sella la cámara de combustión y regula el aceite.",
          },
          {
            "locale": "pt-PT",
            "value": "Veda a câmara de combustão e regula o óleo.",
          },
          {
            "locale": "en-US",
            "value": "Seals the combustion chamber and regulates oil.",
          },
        ],
        "key": "piston-ring-set",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/piston-ring-set.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "piston-ring-set",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Kolbenringsatz",
          },
          {
            "locale": "it-IT",
            "value": "Set di anelli del pistone",
          },
          {
            "locale": "nl-NL",
            "value": "Zuigerverenset",
          },
          {
            "locale": "fr-FR",
            "value": "Jeu de segments de piston",
          },
          {
            "locale": "es-ES",
            "value": "Juego de anillos de pistón",
          },
          {
            "locale": "pt-PT",
            "value": "Conjunto de anéis de pistão",
          },
          {
            "locale": "en-US",
            "value": "Piston Ring Set",
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
            "value": "piston-ring-set",
          },
          {
            "locale": "it-IT",
            "value": "piston-ring-set",
          },
          {
            "locale": "nl-NL",
            "value": "piston-ring-set",
          },
          {
            "locale": "fr-FR",
            "value": "piston-ring-set",
          },
          {
            "locale": "es-ES",
            "value": "piston-ring-set",
          },
          {
            "locale": "pt-PT",
            "value": "piston-ring-set",
          },
          {
            "locale": "en-US",
            "value": "piston-ring-set",
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
