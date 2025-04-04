import type { TProductVariantDraft } from '../../../types';
import ww567Yz01 from './ww-567-yz-01';

describe(`with ww567Yz01 preset`, () => {
  it(`should return a ww567Yz01 preset`, () => {
    const ww567Yz01Preset = ww567Yz01().build<TProductVariantDraft>();
    expect(ww567Yz01Preset).toMatchInlineSnapshot(`
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
              "key": "RED",
              "label": {
                "de-DE": "Rot",
                "en-AU": "Red",
                "en-GB": "Red",
                "en-NZ": "Red",
                "en-US": "Red",
                "es-ES": "Rojo",
                "fr-FR": "Rouge",
                "it-IT": "Rosso",
                "nl-NL": "Rood",
                "pt-PT": "Vermelho",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-red",
      }
    `);
  });

  it(`should return a ww567Yz01 preset when built for graphql`, () => {
    const ww567Yz01PresetGraphql =
      ww567Yz01().buildGraphql<TProductVariantDraft>();
    expect(ww567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1200",
          },
          {
            "name": "color",
            "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-red",
        "staged": true,
      }
    `);
  });
});
