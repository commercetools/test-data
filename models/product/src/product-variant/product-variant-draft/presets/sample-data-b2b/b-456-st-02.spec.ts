import type { TProductVariantDraft } from '../../../types';
import b456St02 from './b-456-st-02';

describe(`with b456St02 preset`, () => {
  it(`should return a b456St02 preset`, () => {
    const b456St02Preset = b456St02().build<TProductVariantDraft>();
    expect(b456St02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
          },
          {
            "name": "model",
            "value": 2019,
          },
          {
            "name": "iso45001",
            "value": true,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2019",
      }
    `);
  });

  it(`should return a b456St02 preset when built for graphql`, () => {
    const b456St02PresetGraphql =
      b456St02().buildGraphql<TProductVariantDraft>();
    expect(b456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
          },
          {
            "name": "model",
            "value": "2019",
          },
          {
            "name": "iso45001",
            "value": "true",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2019",
        "staged": true,
      }
    `);
  });
});
