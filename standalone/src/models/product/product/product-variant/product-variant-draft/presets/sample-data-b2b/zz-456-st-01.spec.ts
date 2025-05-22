import type { TProductVariantDraft } from '../../../types';
import zz456St01 from './zz-456-st-01';

describe(`with zz456St01 preset`, () => {
  it(`should return a zz456St01 preset`, () => {
    const zz456St01Preset = zz456St01().build<TProductVariantDraft>();
    expect(zz456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 8000,
          },
          {
            "name": "color",
            "value": {
              "key": "RED",
              "label": {
                "de-DE": "Rot",
                "en-AU": "Red",
                "en-GB": "Red",
                "en-NZ": "Red",
                "en-US": "Red",
                "es-ES": "Rojo",
                "fr-FR": "Rouge",
                "it-IT": "Rosso",
                "nl-NL": "Rood",
                "pt-PT": "Vermelho",
              },
            },
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-red",
      }
    `);
  });

  it(`should return a zz456St01 preset when built for graphql`, () => {
    const zz456St01PresetGraphql =
      zz456St01().buildGraphql<TProductVariantDraft>();
    expect(zz456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "8000",
          },
          {
            "name": "color",
            "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-red",
      }
    `);
  });
});
