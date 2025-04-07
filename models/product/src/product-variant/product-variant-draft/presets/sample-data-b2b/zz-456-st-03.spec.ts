import type { TProductVariantDraft } from '../../../types';
import zz456St03 from './zz-456-st-03';

describe(`with zz456St03 preset`, () => {
  it(`should return a zz456St03 preset`, () => {
    const zz456St03Preset = zz456St03().build<TProductVariantDraft>();
    expect(zz456St03Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-green",
      }
    `);
  });

  it(`should return a zz456St03 preset when built for graphql`, () => {
    const zz456St03PresetGraphql =
      zz456St03().buildGraphql<TProductVariantDraft>();
    expect(zz456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "8000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "zz456-st-green",
        "staged": true,
      }
    `);
  });
});
