import type { TProductVariantDraft } from '../../../types';
import ddd890Op01 from './ddd-890-op-01';

describe(`with ddd890Op01 preset`, () => {
  it(`should return a ddd890Op01 preset`, () => {
    const ddd890Op01Preset = ddd890Op01().build<TProductVariantDraft>();
    expect(ddd890Op01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ddd890-op-red",
      }
    `);
  });

  it(`should return a ddd890Op01 preset when built for graphql`, () => {
    const ddd890Op01PresetGraphql =
      ddd890Op01().buildGraphql<TProductVariantDraft>();
    expect(ddd890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "12000",
          },
          {
            "name": "color",
            "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ddd890-op-red",
        "staged": true,
      }
    `);
  });
});
