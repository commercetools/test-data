import type { TProductVariantDraft } from '../../../types';
import b456St03 from './b-456-st-03';

describe(`with b456St03 preset`, () => {
  it(`should return a b456St03 preset`, () => {
    const b456St03Preset = b456St03().build<TProductVariantDraft>();
    expect(b456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2023",
      }
    `);
  });

  it(`should return a b456St03 preset when built for graphql`, () => {
    const b456St03PresetGraphql =
      b456St03().buildGraphql<TProductVariantDraft>();
    expect(b456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2023",
        "staged": true,
      }
    `);
  });
});
