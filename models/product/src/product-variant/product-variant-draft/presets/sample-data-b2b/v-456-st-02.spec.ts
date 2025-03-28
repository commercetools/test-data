import type { TProductVariantDraft } from '../../../types';
import v456St02 from './v-456-st-02';

describe(`with v456St02 preset`, () => {
  it(`should return a v456St02 preset`, () => {
    const v456St02Preset = v456St02().build<TProductVariantDraft>();
    expect(v456St02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 300,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2019",
      }
    `);
  });

  it(`should return a v456St02 preset when built for graphql`, () => {
    const v456St02PresetGraphql =
      v456St02().buildGraphql<TProductVariantDraft>();
    expect(v456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "300",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2019",
        "staged": true,
      }
    `);
  });
});
