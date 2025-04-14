import type { TProductVariantDraft } from '../../../types';
import aaa789Uv03 from './aaa-789-uv-03';

describe(`with aaa789Uv03 preset`, () => {
  it(`should return a aaa789Uv03 preset`, () => {
    const aaa789Uv03Preset = aaa789Uv03().build<TProductVariantDraft>();
    expect(aaa789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 10000,
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
            "value": false,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aaa789-uv-green",
      }
    `);
  });

  it(`should return a aaa789Uv03 preset when built for graphql`, () => {
    const aaa789Uv03PresetGraphql =
      aaa789Uv03().buildGraphql<TProductVariantDraft>();
    expect(aaa789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "10000",
          },
          {
            "name": "color",
            "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
          },
          {
            "name": "iso45001",
            "value": "false",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aaa789-uv-green",
      }
    `);
  });
});
