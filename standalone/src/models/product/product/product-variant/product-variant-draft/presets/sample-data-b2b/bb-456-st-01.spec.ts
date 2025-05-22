import type { TProductVariantDraft } from '../../../types';
import bb456St01 from './bb-456-st-01';

describe(`with bb456St01 preset`, () => {
  it(`should return a bb456St01 preset`, () => {
    const bb456St01Preset = bb456St01().build<TProductVariantDraft>();
    expect(bb456St01Preset).toMatchInlineSnapshot(`
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2015",
      }
    `);
  });

  it(`should return a bb456St01 preset when built for graphql`, () => {
    const bb456St01PresetGraphql =
      bb456St01().buildGraphql<TProductVariantDraft>();
    expect(bb456St01PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2015",
      }
    `);
  });
});
