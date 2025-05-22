import type { TProductVariantDraft } from '../../../types';
import a789Bc02 from './a-789-bc-02';

describe(`with a789Bc02 preset`, () => {
  it(`should return a a789Bc02 preset`, () => {
    const a789Bc02Preset = a789Bc02().build<TProductVariantDraft>();
    expect(a789Bc02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 750,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2019",
      }
    `);
  });

  it(`should return a a789Bc02 preset when built for graphql`, () => {
    const a789Bc02PresetGraphql =
      a789Bc02().buildGraphql<TProductVariantDraft>();
    expect(a789Bc02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "750",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "a789-bc-2019",
      }
    `);
  });
});
