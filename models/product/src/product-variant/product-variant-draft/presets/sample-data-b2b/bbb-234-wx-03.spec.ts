import type { TProductVariantDraft } from '../../../types';
import bbb234Wx03 from './bbb-234-wx-03';

describe(`with bbb234Wx03 preset`, () => {
  it(`should return a bbb234Wx03 preset`, () => {
    const bbb234Wx03Preset = bbb234Wx03().build<TProductVariantDraft>();
    expect(bbb234Wx03Preset).toMatchInlineSnapshot(`
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
              "key": "GREEN",
              "label": {
                "de-DE": "Grün",
                "en-AU": "Green",
                "en-GB": "Green",
                "en-NZ": "Green",
                "en-US": "Green",
                "es-ES": "Verde",
                "fr-FR": "Vert",
                "it-IT": "Verde",
                "nl-NL": "Groen",
                "pt-PT": "Verde",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bbb234-wx-green",
      }
    `);
  });

  it(`should return a bbb234Wx03 preset when built for graphql`, () => {
    const bbb234Wx03PresetGraphql =
      bbb234Wx03().buildGraphql<TProductVariantDraft>();
    expect(bbb234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "15000",
          },
          {
            "name": "color",
            "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bbb234-wx-green",
      }
    `);
  });
});
