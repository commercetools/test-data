import type { TProductVariantDraft } from '../../../types';
import iii567Yz03 from './iii-567-yz-03';

describe(`with iii567Yz03 preset`, () => {
  it(`should return a iii567Yz03 preset`, () => {
    const iii567Yz03Preset = iii567Yz03().build<TProductVariantDraft>();
    expect(iii567Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 25000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "iii567-yz-green",
      }
    `);
  });

  it(`should return a iii567Yz03 preset when built for graphql`, () => {
    const iii567Yz03PresetGraphql =
      iii567Yz03().buildGraphql<TProductVariantDraft>();
    expect(iii567Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "25000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "iii567-yz-green",
        "staged": true,
      }
    `);
  });
});
