import type { TProductVariantDraft } from '../../../types';
import ww567Yz03 from './ww-567-yz-03';

describe(`with ww567Yz03 preset`, () => {
  it(`should return a ww567Yz03 preset`, () => {
    const ww567Yz03Preset = ww567Yz03().build<TProductVariantDraft>();
    expect(ww567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1200,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-green",
      }
    `);
  });

  it(`should return a ww567Yz03 preset when built for graphql`, () => {
    const ww567Yz03PresetGraphql =
      ww567Yz03().buildGraphql<TProductVariantDraft>();
    expect(ww567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1200",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-green",
        "staged": true,
      }
    `);
  });
});
