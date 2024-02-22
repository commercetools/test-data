import type { TProductVariantDraft } from '../../../types';
import vv234Wx01 from './vv-234-wx-01';

describe(`with vv234Wx01 preset`, () => {
  it(`should return a vv234Wx01 preset`, () => {
    const vv234Wx01Preset = vv234Wx01().build<TProductVariantDraft>();
    expect(vv234Wx01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-red",
      }
    `);
  });

  it(`should return a vv234Wx01 preset when built for graphql`, () => {
    const vv234Wx01PresetGraphql =
      vv234Wx01().buildGraphql<TProductVariantDraft>();
    expect(vv234Wx01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-red",
      }
    `);
  });
});
