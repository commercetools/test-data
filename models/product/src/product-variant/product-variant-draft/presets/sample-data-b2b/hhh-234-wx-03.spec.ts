import type { TProductVariantDraft } from '../../../types';
import hhh234Wx03 from './hhh-234-wx-03';

describe(`with hhh234Wx03 preset`, () => {
  it(`should return a hhh234Wx03 preset`, () => {
    const hhh234Wx03Preset = hhh234Wx03().build<TProductVariantDraft>();
    expect(hhh234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 20000,
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
              "key": "fixed",
              "label": "Fixed",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hhh234-wx-green",
      }
    `);
  });

  it(`should return a hhh234Wx03 preset when built for graphql`, () => {
    const hhh234Wx03PresetGraphql =
      hhh234Wx03().buildGraphql<TProductVariantDraft>();
    expect(hhh234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "20000",
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
            "value": "{"key":"fixed","label":"Fixed"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hhh234-wx-green",
        "staged": true,
      }
    `);
  });
});
