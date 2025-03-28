import type { TProductVariantDraft } from '../../../types';
import b456St01 from './b-456-st-01';

describe(`with b456St01 preset`, () => {
  it(`should return a b456St01 preset`, () => {
    const b456St01Preset = b456St01().build<TProductVariantDraft>();
    expect(b456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
          },
          {
            "name": "model",
            "value": 2015,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2015",
      }
    `);
  });

  it(`should return a b456St01 preset when built for graphql`, () => {
    const b456St01PresetGraphql =
      b456St01().buildGraphql<TProductVariantDraft>();
    expect(b456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
          },
          {
            "name": "model",
            "value": "2015",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "b456-st-2015",
        "staged": true,
      }
    `);
  });
});
