import type { TProductVariantDraft } from '../../../types';
import vv234Wx02 from './vv-234-wx-02';

describe(`with vv234Wx02 preset`, () => {
  it(`should return a vv234Wx02 preset`, () => {
    const vv234Wx02Preset = vv234Wx02().build<TProductVariantDraft>();
    expect(vv234Wx02Preset).toMatchInlineSnapshot(`
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
              "key": "BLUE",
              "label": {
                "de-DE": "Blau",
                "en-AU": "Blue",
                "en-GB": "Blue",
                "en-NZ": "Blue",
                "en-US": "Blue",
                "es-ES": "Azul",
                "fr-FR": "Bleu",
                "it-IT": "Blu",
                "nl-NL": "Blauw",
                "pt-PT": "Azul",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-blue",
      }
    `);
  });

  it(`should return a vv234Wx02 preset when built for graphql`, () => {
    const vv234Wx02PresetGraphql =
      vv234Wx02().buildGraphql<TProductVariantDraft>();
    expect(vv234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
          },
          {
            "name": "color",
            "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-blue",
      }
    `);
  });
});
