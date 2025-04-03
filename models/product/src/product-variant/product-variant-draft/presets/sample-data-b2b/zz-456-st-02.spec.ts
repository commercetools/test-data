import type { TProductVariantDraft } from '../../../types';
import zz456St02 from './zz-456-st-02';

describe(`with zz456St02 preset`, () => {
  it(`should return a zz456St02 preset`, () => {
    const zz456St02Preset = zz456St02().build<TProductVariantDraft>();
    expect(zz456St02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-blue",
      }
    `);
  });

  it(`should return a zz456St02 preset when built for graphql`, () => {
    const zz456St02PresetGraphql =
      zz456St02().buildGraphql<TProductVariantDraft>();
    expect(zz456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "8000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-blue",
        "staged": true,
      }
    `);
  });
});
