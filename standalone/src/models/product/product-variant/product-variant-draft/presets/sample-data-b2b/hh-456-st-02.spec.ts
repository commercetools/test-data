import type { TProductVariantDraft } from '../../../types';
import hh456St02 from './hh-456-st-02';

describe(`with hh456St02 preset`, () => {
  it(`should return a hh456St02 preset`, () => {
    const hh456St02Preset = hh456St02().build<TProductVariantDraft>();
    expect(hh456St02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2019",
      }
    `);
  });

  it(`should return a hh456St02 preset when built for graphql`, () => {
    const hh456St02PresetGraphql =
      hh456St02().buildGraphql<TProductVariantDraft>();
    expect(hh456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2019",
      }
    `);
  });
});
