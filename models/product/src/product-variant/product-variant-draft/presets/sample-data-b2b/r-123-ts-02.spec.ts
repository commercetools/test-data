import type { TProductVariantDraft } from '../../../types';
import r123Ts02 from './r-123-ts-02';

describe(`with r123Ts02 preset`, () => {
  it(`should return a r123Ts02 preset`, () => {
    const r123Ts02Preset = r123Ts02().build<TProductVariantDraft>();
    expect(r123Ts02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
          },
          {
            "name": "model",
            "value": 2019,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2019",
      }
    `);
  });

  it(`should return a r123Ts02 preset when built for graphql`, () => {
    const r123Ts02PresetGraphql =
      r123Ts02().buildGraphql<TProductVariantDraft>();
    expect(r123Ts02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
          },
          {
            "name": "model",
            "value": "2019",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "r123-ts-2019",
        "staged": true,
      }
    `);
  });
});
