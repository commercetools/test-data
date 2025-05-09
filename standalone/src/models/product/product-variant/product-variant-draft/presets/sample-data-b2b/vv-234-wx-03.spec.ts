import type { TProductVariantDraft } from '../../../types';
import vv234Wx03 from './vv-234-wx-03';

describe(`with vv234Wx03 preset`, () => {
  it(`should return a vv234Wx03 preset`, () => {
    const vv234Wx03Preset = vv234Wx03().build<TProductVariantDraft>();
    expect(vv234Wx03Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-green",
      }
    `);
  });

  it(`should return a vv234Wx03 preset when built for graphql`, () => {
    const vv234Wx03PresetGraphql =
      vv234Wx03().buildGraphql<TProductVariantDraft>();
    expect(vv234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "vv234-wx-green",
      }
    `);
  });
});
