import type { TProductVariantDraft } from '../../../types';
import uu789Uv03 from './uu-789-uv-03';

describe(`with uu789Uv03 preset`, () => {
  it(`should return a uu789Uv03 preset`, () => {
    const uu789Uv03Preset = uu789Uv03().build<TProductVariantDraft>();
    expect(uu789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-green",
      }
    `);
  });

  it(`should return a uu789Uv03 preset when built for graphql`, () => {
    const uu789Uv03PresetGraphql =
      uu789Uv03().buildGraphql<TProductVariantDraft>();
    expect(uu789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-green",
        "staged": true,
      }
    `);
  });
});
