import type { TProductVariantDraft } from '../../../types';
import ddd890Op03 from './ddd-890-op-03';

describe(`with ddd890Op03 preset`, () => {
  it(`should return a ddd890Op03 preset`, () => {
    const ddd890Op03Preset = ddd890Op03().build<TProductVariantDraft>();
    expect(ddd890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 12000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ddd890-op-green",
      }
    `);
  });

  it(`should return a ddd890Op03 preset when built for graphql`, () => {
    const ddd890Op03PresetGraphql =
      ddd890Op03().buildGraphql<TProductVariantDraft>();
    expect(ddd890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "12000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ddd890-op-green",
        "staged": true,
      }
    `);
  });
});
