import type { TProductVariantDraft } from '../../../types';
import bbb234Wx01 from './bbb-234-wx-01';

describe(`with bbb234Wx01 preset`, () => {
  it(`should return a bbb234Wx01 preset`, () => {
    const bbb234Wx01Preset = bbb234Wx01().build<TProductVariantDraft>();
    expect(bbb234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 15000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bbb234-wx-red",
      }
    `);
  });

  it(`should return a bbb234Wx01 preset when built for graphql`, () => {
    const bbb234Wx01PresetGraphql =
      bbb234Wx01().buildGraphql<TProductVariantDraft>();
    expect(bbb234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "15000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bbb234-wx-red",
        "staged": true,
      }
    `);
  });
});
