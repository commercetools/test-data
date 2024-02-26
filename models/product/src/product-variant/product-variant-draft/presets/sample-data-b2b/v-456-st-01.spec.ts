import type { TProductVariantDraft } from '../../../types';
import v456St01 from './v-456-st-01';

describe(`with v456St01 preset`, () => {
  it(`should return a v456St01 preset`, () => {
    const v456St01Preset = v456St01().build<TProductVariantDraft>();
    expect(v456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 300,
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
              "key": "tracked",
              "label": "Tracked",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2015",
      }
    `);
  });

  it(`should return a v456St01 preset when built for graphql`, () => {
    const v456St01PresetGraphql =
      v456St01().buildGraphql<TProductVariantDraft>();
    expect(v456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "300",
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
            "value": "{"key":"tracked","label":"Tracked"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2015",
      }
    `);
  });
});
